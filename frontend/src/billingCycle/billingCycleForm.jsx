import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import labelAndInput from '../common/form/labelAndInput.jsx'

class BillingCycleForm extends Component{
    render(){
        const {handleSubmit} = this.props
        console.log(handleSubmit)
        return(
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={labelAndInput}
                    label='Nome' cols='12 4' placeholder='Informe o nome'
                    />
                    <Field name='month' component={labelAndInput} type='number'
                    label='Mes' cols='12 4' placeholder='Informe o mes'
                    />
                    <Field name='year' component={labelAndInput} type='number'
                    label='Ano' cols='12 4' placeholder='Informe o ano'
                    
                    />

                </div>
                <div className="box-footer">
                    <button type='submit' className="btn btn-primary">Submit</button>
                </div>
            </form>

        )
    }
}

export default reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)