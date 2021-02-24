import React from 'react';

export default class HomeComponent extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            nom: 'Jean',
            textarea: 'Mon contenu',
            selected: 'deuxieme',
            checked: false
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

            <>
                <h1 className="title is-3">Formulaire d'inscription</h1>
                <div className="field">
                    <label htmlFor="name" className="label">Nom :</label>
                    <div className="control has-icons-left">
                        <input type="text" className="input" id="name"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-address-card"/>
                        </span>
                    </div>
                </div>
                
                <div className="field">
                    <label htmlFor="" className="label" id=""></label>
                </div>
            </>
        );
    }
}
