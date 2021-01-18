import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {init} from '../billingCycle/billingCycleActions.js'
import {reduxForm, Field} from 'redux-form'
import labelAndInput from '../common/form/labelAndInput.jsx'

class BillingCycleForm extends Component{
    render(){
        const {handleSubmit, readOnly} = this.props
        console.log(handleSubmit)
        return(
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={labelAndInput} readOnly={readOnly}
                    label='Nome' cols='12 4' placeholder='Informe o nome'
                    />
                    <Field name='month' component={labelAndInput} type='number' readOnly={readOnly}
                    label='Mes' cols='12 4' placeholder='Informe o mes'
                    />
                    <Field name='year' component={labelAndInput} type='number' readOnly={readOnly}
                    label='Ano' cols='12 4' placeholder='Informe o ano'
                    
                    />

                </div>
                <div className="box-footer">
                    <button type='submit' className="btn btn-primary">Submit</button>
                    <button type='button' className="btn btn-default"
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>

        )
    }
}
BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)