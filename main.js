import {
  getPresalesApproved,
  getPresalesNotApproved
} from './multicall.js';
import BigNumber from 'bignumber.js';
import Web3 from 'web3';
const init = async () => {
  const presalesApproved = await getPresalesApproved();
  console.log('presalesApproved: ', presalesApproved);

  const presalesNotApproved = await getPresalesNotApproved();
  console.log('presalesNotApproved', presalesNotApproved);
  console.log(
    'presalesNotApproved: ',

    typeof parseInt(presalesNotApproved[0].tokenXSupply.hex.toString())
  );
  // const res = await getPresalesNotApprovedAddresses();
  // console.log('res: ', res);
};

init();
