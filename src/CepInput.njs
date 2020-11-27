import Nullstack from 'nullstack';

class CepInput extends Nullstack {

  async parse({event, onchange, onsearch}) {
    const value = event.target.value.replace(/\D/g,'');
    onchange({value});
    if(onsearch && value.length === 8) {
      const url = `https://viacep.com.br/ws/${value}/json/`;
      const result = await fetch(url);
      const data = await result.json();
      const place = {
        neighborhood: data.bairro,
        city: data.localidade,
        address: data.logradouro,
        state: data.uf
      }
      const focusSuggestion = place.address ? 'addressNumber' : 'address';
      onsearch({place, focusSuggestion});
    }
  }

  mask({value}) {
    const v = (value || '').replace(/\D/g, '');
    if(v.length > 5) {
      return `${v.slice(0,5)}-${v.slice(5, 8)}`;
    }
    return v;
  }
  
  render({name, placeholder, class: klass, id, disabled}) {
    return (
      <input
        type="tel"
        name={name}
        value={this.mask()}
        placeholder={placeholder}
        maxlength={9}
        oninput={this.parse}
        class={klass}
        id={id}
        disabled={disabled}
      />
    )
  }

}

export default CepInput;