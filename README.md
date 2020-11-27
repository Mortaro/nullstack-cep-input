
# Nullstack CEP Input

Simple input that converts user formatted input into a numerical string and the other way around.

## Install

```bash
npm install --save nullstack-cep-input
```

## Usage with one way binding

```jsx
import Nullstack from 'nullstack';
import CepInput from 'nullstack-cep-input';

class Application extends Nullstack {

  cep = '26115120';

  updateCep({value}) {
    this.cep = value;
  }

  render() {
    return (
      <CepInput name="cep" value={this.cep} onchange={this.upcepCep} />
    )
  }

}

export default Application;
```

## Usage with two way binding

```jsx
import Nullstack from 'nullstack';
import CepInput from 'nullstack-cep-input';

class Application extends Nullstack {

  cep = '69307582';

  render() {
    return (
      <CepInput bind={this.cep} />
    )
  }

}

export default Application;
```

## Place autocompletion

This component uses [ViaCEP](https://viacep.com.br) under the hood to search the address

Subscribe to onsearch to get the API response and a suggestion of which input should be focused next

The focus suggestion will be "neighborhood" or "addressNumber" according to which information is missing

```jsx
import Nullstack from 'nullstack';
import CepInput from 'nullstack-cep-input';

class Application extends Nullstack {

  cep = '';

  updateAddress({place, focusSuggestion}) {
    const {address, neighborhood, city, state} = place;
  }

  render() {
    return (
      <CepInput bind={this.cep} onsearch={this.updateAddress} />
    )
  }

}

export default Application;
```

## Customization

You can customize the following attributes:

- id
- class
- placeholder
- disabled
- data-*

## License

Nullstack CEP Input is released under the [MIT License](https://opensource.org/licenses/MIT).