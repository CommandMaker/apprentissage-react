import React from 'react';
import './css/Home.css';

export default class HomeComponent extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            email: '',
            newsletter: false
        }

        this.handleChange.bind(this);
    }

    handleChange (e) {
        console.log(e);
        this.setState({nom: e.target.value});
    }

    render () {
        return (
            // <>
            //     <label htmlFor="nom" className="label">Mon nom</label>
            //     <input type="text" id="nom" name="nom" value={this.state.nom} onChange={e => this.handleChange(e)} className="input"/>
            //     <br/>
            //     <br/>
            //     <label htmlFor="textarea" className="label">Mon textarea</label>
            //     <textarea className="textarea" id="textarea" value={this.state.textarea} onChange={event => this.setState({textarea: event.target.value})}/>
            //
            //     <br/><br/>
            //     <div className="select">
            //         <select value={this.state.selected} onChange={event => this.setState({selected: event.target.value})}>
            //             <option value="ok">OK</option>
            //             <option value="deuxieme">Deuxième option du select</option>
            //         </select>
            //     </div>
            //     <br/><br/>
            //
            //     <label className="checkbox">
            //         <input type="checkbox" checked={this.state.checked} onChange={event => this.setState({checked: event.target.checked})}/>
            //         Ma checkbox
            //     </label>
            //
            //     <br/><br/>
            //
            //     {this.state.checked ? <div className="checkbox-message">Un message affiché si la checkbox est cochée</div> : null}
            // </>

            <div className="columns is-centered">
                <div className="column is-three-quarters">
                    <div className="card">
                        <div className="card-content">

                            <h1 className="title is-3">Formulaire d'inscription</h1>

                            <div className="field">
                                <label htmlFor="name" className="label">Nom :</label>
                                <div className="control has-icons-left">
                                    <input type="text" className="input" id="name" name="name" value={this.state.nom}
                                           onChange={e => this.setState({nom: e.target.value})}/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-address-card"/>
                                    </span>
                                </div>
                            </div>

                            <div className="field">
                                <label htmlFor="first-name" className="label">Prénom :</label>
                                <div className="control has-icons-left">
                                    <input type="text" className="input" id="first-name" name="first-name"
                                           value={this.state.prenom}
                                           onChange={e => this.setState({prenom: e.target.value})}/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-address-card"/>
                                    </span>
                                </div>
                            </div>

                            <div className="field">
                                <label htmlFor="email" className="label">Email :</label>
                                <div className="control has-icons-left email-field">
                                    <input id="email" className="input is-danger" type="text" value={this.state.email} onChange={(e) => {
                                        this.setState({email: e.target.value})
                                        let regex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
                                        if (this.state.email.match(regex)) {
                                            console.log("OK");
                                            document.querySelector('.email-field').classList.remove('is-danger');
                                            document.querySelector('.email-field').classList.add('is-success');
                                        } else {
                                            console.log("Pas ok");
                                            document.querySelector('.email-field').classList.remove('is-success');
                                            document.querySelector('.email-field').classList.add('is-danger');
                                        }
                                    }}/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-at"/>
                                    </span>
                                </div>
                            </div>

                            <div className="field">
                                <label className="checkbox">
                                    <input type="checkbox" className="form-checkbox" checked={this.state.newsletter}
                                           onChange={e => this.setState({newsletter: e.target.checked})}/>
                                    S'abonner à la newsletter
                                </label>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
