//Nos permitira saber donde esta ubicado el proyecto, ya sea en nuestra pc, en la de un amigo o cuando se inicialize en un servidor.
const path = require('path');
//Instanciamos el paquete html-webpack-plugin para poder hacer uso de su configuracion en la parte de plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

//THIS IS NEW
//Instanciamos el plugin de mini-css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//Esto es para exportar las configuraciones
module.exports = {
    //Este nos dice donde esta el punto de entrada de nuestra aplicacion
    entry: './src/index.js',
    //Donde va a vivir el proyecto una vez este terminado 
    output: {
        //le damos un resolve para saber donde nos encontramos y ahi crear una carpeta donde vivira nuestro proyecto, 
        //__dirname para saber donde me encuentro y dist sera la carpeta que creara
        path: path.resolve(__dirname, 'dist'),
        //Crearemos un nombre al bundle que se creara
        filename: 'bundle.js'
    },
    mode: 'development',
    resolve: {
        //Le indicamos las extensiones que se trabajaran dentro del proyecto
        extensions: ['.js','.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@logos': path.resolve(__dirname,'src/assets/logos/'),
            '@icons': path.resolve(__dirname,'src/assets/icons/'),
            '@styles': path.resolve(__dirname, 'src/styles/')
        },
    },
    //Aqui trabajamos las reglas que crearemos con los louders y el uso de plugins.
    module: {
        //Son reglas que aplican en el proyecto
        rules: [
            {
                test: /\.(svg|png|jpg|gif|pdf)$/,
                type: 'asset',
            },
            {
                //Es una regla con un Regex que nos permite probar cuales elemenos vamos a estar trabajando
                test: /\.(js|jsx)$/,
                //Indica que no aplica para la carpeta node_modules
                exclude: /node_modules/,
                //Aqui se usa usara el louder de babel
                use: {
                    loader:'babel-loader'
                }
            },
            {
                //Esto nos permitira trabajar directamente con html
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
//THIS IS NEW
            {
                //Agregamos las rules para el CSS, [ac] indica que puede ser a o c las letras que puede haber ahi
                test: /\.(css|scss)$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ], 
            }
                //Regla para que se puedan usar imagenes que esten dentro del proyecto

        ]
    },
    plugins: [
        //Instanciamos el plugin y le podremos pasar la configuracion del plugin
        new HtmlWebpackPlugin(
            {
                //Es la direccion del archivo raiz a transformar
                template: './public/index.html',
                //Es como se va a llamar una vez lo preparemos
                filename: './index.html'
            }
        ),
//THIS IS NEW
        //Instanciamos y configuramos el plugin de CSS
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
//THIS IS NEW
    //Esto nos permitira trabajar mas comodamente con el servidor y nuestro entorno de desarrollador
    devServer: {
        historyApiFallback: true,
        //Nos permite saber donde esta trabajando nuestro proyecto
        static: {
            directory: path.join(__dirname, "./")
        },
        //Puerto que usaremos
        port: 3005, 
    }
}