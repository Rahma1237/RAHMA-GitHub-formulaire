import React, { Component } from 'react';
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        name: '',
        email: '',
        prenom: '',
        age: '',
        telephone: '',
        situation: '',
        sexe: '',
        adresse: '',
        objectif: '',
        diplome: '',
        langues: [],
        competences: '',
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleRadioChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    this.setState((prevState) => {
      let updatedLangues = [...prevState.formData.langues];

      if (checked) {
        updatedLangues.push(value);
      } else {
        updatedLangues = updatedLangues.filter((langue) => langue !== value);
      }

      return {
        formData: {
          ...prevState.formData,
          langues: updatedLangues,
        },
      };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Faites quelque chose avec les données du formulaire, par exemple, envoyez-les à une API
    console.log(this.state.formData);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} name="MonFormulaire">
        <h1 align="middle">FORMULAIRE</h1>
        <legend align="middle">MERCI DE REMPLIR CE FORMULAIRE</legend>
      <div className="container">
      <h2 className="title">Informations personnelles</h2>
        <fieldset>
          <div text-align="center" className="input-box">
            <label className="title" htmlFor="name">Nom:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom"
              value={this.state.formData.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-box">
            <label className="title" htmlFor="prenom">Prenom:</label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              placeholder="Votre prénom"
              value={this.state.formData.prenom}
              onChange={this.handleChange}
            />
          </div>
          
          <div className="input-box">
            <label className="title" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="votre email"
              value={this.state.formData.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-box">
            <label className="title" htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              name="age"
              placeholder="votre age"
              value={this.state.formData.age}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-box">
            <label className="title" htmlFor="telephone">Telephone:</label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              placeholder="Votre telephone"
              value={this.state.formData.telephone}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-box">
            <label className="title" htmlFor="adresse">Adresse:</label>
            <textarea
              type="text"
              id="adresse"
              name="adresse"
              placeholder="Votre adresse"
              value={this.state.formData.adresse}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label className="title" htmlFor="situation">Situation:</label>
            <div>
              <input
                type="radio"
                id="Célibataire"
                name="situation"
                value="Célibataire"
                checked={this.state.formData.situation === "Célibataire"}
                onChange={this.handleRadioChange}
              />
              <label htmlFor="Célibataire">Célibataire</label>
            </div>
            <div>
              <input
                type="radio"
                id="marrié"
                name="situation"
                value="marrié"
                checked={this.state.formData.situation === "marrié"}
                onChange={this.handleRadioChange}
              />
              <label htmlFor="marrié">marrié</label>
            </div>
          </div>
          <div>
            <label className="title" htmlFor="sexe">Sexe:</label>
            <div>
              <input
                type="radio"
                id="Homme"
                name="sexe"
                value="Homme"
                checked={this.state.formData.sexe === "Homme"}
                onChange={this.handleRadioChange}
              />
              <label htmlFor="Homme">Homme</label>
            </div>
            <div>
              <input
                type="radio"
                id="Femme"
                name="sexe"
                value="Femme"
                checked={this.state.formData.sexe === "Femme"}
                onChange={this.handleRadioChange}
              />
              <label htmlFor="Femme">Femme</label>
            </div>
          </div>
        </fieldset>
        <h2 className="title">Informations professionnelles</h2>
        <div className="Informations professionnelles"></div>
        <fieldset>
        <div className="input-box">
          <label className="title" htmlFor="objectif">Objectif Professionnel:</label>
          <textarea
            type="text"
            id="objectif"
            name="objectif"
            rows="4"
            cols="90"
            placeholder="Parlez de votre objectif professionnel"
            value={this.state.formData.objectif}
            onChange={this.handleChange}
          />
        </div>
        <div className="input-box">
          <label className="title" htmlFor="diplome">Diplôme:</label>
          <select
            id="diplome"
            name="diplome"
            value={this.state.formData.diplome}
            onChange={this.handleChange}
          >
            <option value="">Sélectionnez un diplôme</option>
            <option value="Bac">Bac</option>
            <option value="Licence">Licence</option>
            <option value="Master">Master</option>
            <option value="Doctorat">Doctorat</option>
            <option value="Ingénieur">Ingénieur</option>
          </select>
        </div>
        <div>
          <label className="title">Langues:</label>
          <div >
            <label>
              <input
                type="checkbox"
                name="langues"
                value="Anglais"
                checked={this.state.formData.langues.includes("Anglais")}
                onChange={this.handleCheckboxChange}
              />
              Anglais
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="langues"
                value="Français"
                checked={this.state.formData.langues.includes("Français")}
                onChange={this.handleCheckboxChange}
              />
              Français
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="langues"
                value="Arabe"
                checked={this.state.formData.langues.includes("Arabe")}
                onChange={this.handleCheckboxChange}
              />
              Arabe
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="langues"
                value="Espagnol"
                checked={this.state.formData.langues.includes("Espagnol")}
                onChange={this.handleCheckboxChange}
              />
              Espagnol
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="langues"
                value="Autres"
                checked={this.state.formData.langues.includes("Autres")}
                onChange={this.handleCheckboxChange}
              />
              Autres
            </label>
          </div>
          <div className="input-box">
          <label className="title" htmlFor="competences">Compétences techniques:</label>
          <textarea
            type="text"
            id="competences"
            name="competences"
            rows="4"
            cols="90"
            placeholder="Parlez de votre Compétences techniques"
            value={this.state.formData.objectif}
            onChange={this.handleChange}
          />
        </div>
        </div>
        </fieldset>
        <div>
          <button type="submit" id="submit">Soumettre</button>
        </div>
        </div>
      </form>
      
    );
  }
}
export default App;
