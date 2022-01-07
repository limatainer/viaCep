import './styles.css';

import ResultCard from 'components/ResultCard';
import React, { useState } from 'react';
import axios from 'axios';

type FormData = {
  cep: string;
}

type Address = {
  logradouro: string;
  localidade: string
}

const CepSearch = () => {

  const [formData, setFormData] = useState<FormData>({
    cep: ""
  });

  const [address, setAddress] = useState<Address>();

  const recebeNumero = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('O numero inserido foi ' + event.target.value)
    const name = event.target.name
    const value = event.target.value
    setFormData({ ...formData, [name]: value })
  }
  const chamarApi = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(formData)
    axios.get(`https://viacep.com.br/ws/${formData.cep}/json/`).then(
      (response) => {
        setAddress(response.data)
        console.log(response.data)
      }
    ).catch((error) => {
      setAddress(undefined);
      console.log(error);
    });
  }

  return (
    <div className="cep-search-container">
      <h1 className="text-primary">Busca CEP</h1>
      <div className="container search-container">
        <form onSubmit={chamarApi}>
          <div className="form-container">
            <input
              type="text"
              name='cep'
              value={formData.cep}
              className="search-input"
              placeholder="CEP (somente números)"
              onChange={recebeNumero}
            />
            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </div>
        </form>
        {address &&
          <>
            <ResultCard title="Logradouro" description={address.logradouro} />
            <ResultCard title="Localidade" description={address.localidade} />
          </>}

      </div>
    </div>
  );
};

export default CepSearch;
