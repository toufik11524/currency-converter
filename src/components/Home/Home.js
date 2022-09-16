import React, { useReducer } from 'react';
import reducer from '../../utils/reducer';

const intialState = {
    currencyDollar: "",
    currencyTaka: ""
};

const Home = () => {
    const [state, dispatch] = useReducer(reducer, intialState);

    const takaToDollar = e => {
        console.log(e.target.value);
        return dispatch({
          type: "TAKA_TO_DOLLAR",
          payload: {
            currency: e.target.value
          },
        });
    };
    
    const dollarToTaka = e => {
        console.log('dollar', e.target.value);
        return dispatch({
          type: "DOLLAR_TO_TAKA",
          payload: {
            currency: e.target.value
          },
        });
    };

    return (
        <div className='home'>
            <h2 className='home__header'>Currency Converter</h2>
            <section className='home__container'>
              <section className='home__container__taka' >
                  <p>BDT</p>
                  <input value={state.currencyTaka} type="number" name="bdt" onChange={takaToDollar} />
              </section>
              <section className='home__container__dollar'>
                  <p>USD</p>
                  <input value={state.currencyDollar} type="number" name="usd" onChange={dollarToTaka} />
              </section>
            </section>
        </div>
    );
};

export default Home;