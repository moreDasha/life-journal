// начальное состояние
export const initialState = {
  isValid: {
    title: true,
    date: true,
    text: true
  },
  values: {
    title: '',
    date: '',
    text: '',
    tag: ''
  },
  isReadyToSubmit: false
};

// функция изменения состояниия по action
export const formReducer = (state, action) => {
  switch (action.type) {
    case 'RESET_VALIDITY':
      return {...state, isValid: initialState.isValid};

    case 'SUBMIT': {
      const titleValidity = state.values.title?.trim().length;
      const dateValidity = state.values.date;
      const textValidity = state.values.text?.trim().length;

      return {
        ...state,
        isValid: {
          title: titleValidity,
          date: dateValidity,
          text: textValidity
        },
        isReadyToSubmit: titleValidity && dateValidity && textValidity
      };
    }

    case 'CLEAR':
      return {...state, values: initialState.values, isReadyToSubmit: false};

    case 'SET_VALUE':
      return {...state, values: {...state.values, ...action.payload}};
  }
};