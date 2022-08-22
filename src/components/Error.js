import React from 'react';

export default function Error({mensagem}) {
return (
    <div className="container">
        <div className="row">
            <div className="col s12 m6 offset-m3">
                <div className="card-panel red darken-4 error">
                    {mensagem}
                </div>
            </div>
        </div>
    </div>
)
};
