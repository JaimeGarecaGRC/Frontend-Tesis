import React from 'react';

import '../styles/ResultSearch.scss'

const Result = ({result}) => {
    return (
        <>
        <div>
            <div className=" box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAUVBMVEX///8AAACOjo7V1dWDg4P7+/tVVVXs7Ozb29sdHR26urrR0dEvLy90dHTi4uJ9fX3BwcHHx8ejo6OdnZ3p6enz8/NtbW2oqKhoaGjKysq3t7eDVL1IAAAB5ElEQVR4nO3dwVLbMBiFUQxJQ6BQCoS2vP+DdtNFZ5xOrivwL9vn21vjs5Ilj+WrK0mSJKnr9q+H/ju1CO+HBfStRXhTffdJO0LC7iMk7D9Cwj99aRnmM7omzCIsjDCMsDDCMMLCCMMICyMMIyyMMIywMMIwwsI+Xfj2MLG3H2fGP/0ML76dXzhM7tyLzEN68felCk+EhISEhIQXhRuYD3fXUbvHpQobIgwjJCRsiDCMkJCwIcIwQsJLwv3dU9ZhqcINrIAJCQkJCQkvCrcwHx6jhl9LFTZEGEZISNgQYRghIWFDhGGEhBeF+7DFCte/Al6/cP37NISEhISE03o4M348Hz7NL3yc3PhV/IRhxo9tvs4LIyyMMIywMMIwwsIIwwgLIwzbsvD9bs7eF3EuRlMvqxc+ExISEhIS9ig8fp2z4/igMM+lYYSFEYYRFkYYRlgYYRhhYYRh/xbez9vr/MJh3uyXEhISEhIS1giz4x4+qMF+6X9HWBhhGGFhhGGEhRGGERZGGEZY2NpWwHaECQkJCQkJtyAsmPFv5q3g7w/lEYYRFkYYRlgYYRhhYYRhhIURhhEWRhhGWBhhGGFhhGF/C9PfGMzTxws7jpCw/wgJ+4+QsP+afpW1v11A4y/ZJUnSuN9QOHpAHykqBQAAAABJRU5ErkJggg==" alt="Image" />
                    </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{result.document.titulo}</strong> <small>TIPO: {result.document.tipo}</small>
                            <br />
                            {result.document.descripcion}
                            </p>
                        </div>
                    </div>
                    <span className="icon is-small">
                        <a href='/article'>
                            <i className="fas fa-reply" aria-hidden="true"></i>
                        </a>
                    </span>
                </article>
            </div>
        </div>
        </>
    );
}

export default Result;