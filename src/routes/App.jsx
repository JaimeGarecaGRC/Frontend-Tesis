import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import UploadDocument from '../pages/UploadDocument';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound'
import Document from '../pages/Document';
import ResearchResult from '../pages/ResearchResult';
import CreateDocument from '../pages/CreateDocument';
import appResearchContext from '../context/appContext';

import AppContext from '../context/appContext';
import useInitialState from '../hooks/useInitialState';

import AppArrayContext from '../context/appArrayContext';


import '../styles/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useInitialResultState from '../hooks/useResultState';

const App = () => {
	const initialState = useInitialState();
	const initialResultState = useInitialResultState();
	return (
		<AppContext.Provider value={initialState}>
		
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="login" element={ <Login />} />
						<Route path="*" element={ <NotFound/>} />
						<Route path="results" element={ <ResearchResult/> }/>
						<Route path="document" element={ <Document/> }/>
						<Route path="upload" element={<UploadDocument/>}/>
						<Route path="create-article" element={<CreateDocument/>}/>
						<Route path="article" element={<Document/>}/>
					</Routes>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;