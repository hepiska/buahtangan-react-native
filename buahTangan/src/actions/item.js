import axios from 'axios';
import { FETCH_ITEM } from './constans';

export const fetchItemDone = (items) => ({ type: FETCH_ITEM, payload: items });

export const fetchItem = categories => dispatch => {
if (categories=='all') {
  url=`http://buahtanganbackend-dev.ap-southeast-1.elasticbeanstalk.com/api/products/all/${categories}`
} else {
  url=`http://buahtanganbackend-dev.ap-southeast-1.elasticbeanstalk.com/api/products/all/${categories}`;
}
console.log(url);
return(axios.get(url, {})
.then(response => (dispatch(fetchItemDone(response.data))))
.catch(err => console.log(err))
)};
