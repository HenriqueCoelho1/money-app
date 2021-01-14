import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import DashboardReducer from '../dashboard/dashboardReducer.js'
import TabReducer from '../common/tab/tabReducer.js'
import BillingCycleReducer from '../billingCycle/billingCycleReducer.js'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer
})


export default rootReducer