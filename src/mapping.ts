import { Address, BigDecimal, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts"
import { log } from '@graphprotocol/graph-ts'
import {
  Contract,
  Approval,
  Claim,
  ClaimAssist,
  DailyDataUpdate,
  ShareRateChange,
  StakeGoodAccounting,
  StakeEnd,
  StakeStart,
  XfLobbyEnter,
  XfLobbyExit,
  Transfer,
} from "../generated/Contract/Contract"
import { _StakeEnd
        ,_StakeStart 
        ,_StakeGoodAccounting
        ,_ShareRateChange
        ,_Claim
        ,_ClaimAssist
        ,_DailyDataUpdate
        ,_XfLobbyEnter
        ,_XfLobbyExit
        ,_TokenHolder
        ,_Transfer
        ,_MetaCounts
        ,_GlobalInfo
} from '../generated/schema'
import { StakeEndData
        ,StakeStartData
        ,StakeGoodAccountingData
        ,ShareRateChangeData 
        ,ClaimData
        ,ClaimAssistData
        ,DailyDataUpdateData
        ,DailyDataRangeData
        ,XfLobbyEnterData
        ,XfLobbyExitData
} from '../src/eventDataClasses'
 
function convertDecimalToBinary(number: BigInt): string {
  // log.debug('Binary Variable', []);
   var binary = ""; 
   let temp = number;
 
   let zero = BigInt.fromI32(0);
   let two = BigInt.fromI32(2);

   while(temp > zero){
       if((temp % two) == zero){
           binary = "0" + binary;
       }
       else {
           binary = "1" + binary;
       }
 
       temp = temp / two;
   }
   
   return binary;
}

function parseInput(input: Bytes): string {
  //0x96f62b9d - btcAddressClaim
  //0xce7d1f77 - xfLobbyEnter
  //0xcbb151d3 - xfLobbyExit
  //0x343009a2 - stakeEnd
  //0x52a438b8 - stakeStart
  //0x65cf71b2 - stakeGoodAccounting

  var result = ""; 
  let temp = input.toHexString();

  let tempSlice = temp.slice(0,10);    
   
  //log.debug('The tempSlice: {}, the temp: {}', [tempSlice, temp]);

  if(tempSlice == "0x96f62b9d"){
    result = "btcAddressClaim"
  }
  if(tempSlice == "0xce7d1f77"){
    result = "xfLobbyEnter"
  }
  if(tempSlice == "0xcbb151d3"){
    result = "xfLobbyExit"
  } 
  if(tempSlice == "0x343009a2"){
    result = "stakeEnd"
  } 
  if(tempSlice == "0x52a438b8"){
    result = "stakeStart"
  } 
  if(tempSlice == "0x65cf71b2"){
    result = "stakeGoodAccounting"
  }

  return result;
}
 
export function handleApproval(event: Approval): void {
  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(Address.fromString("0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39"));
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.allocatedSupply(...)
  // - contract.allowance(...)
  // - contract.approve(...)
  // - contract.balanceOf(...)
  // - contract.btcAddressClaim(...)
  // - contract.btcAddressClaims(...)
  // - contract.btcAddressIsClaimable(...)
  // - contract.btcAddressIsValid(...)
  // - contract.claimMessageMatchesSignature(...)
  // - contract.currentDay(...)
  // - contract.dailyData(...)
  // - contract.dailyDataRange(...)
  // - contract.decimals(...)
  // - contract.decreaseAllowance(...)
  // - contract.globalInfo(...)
  // - contract.globals(...)
  // - contract.increaseAllowance(...)
  // - contract.merkleProofIsValid(...)
  // - contract.name(...)
  // - contract.pubKeyToBtcAddress(...)
  // - contract.pubKeyToEthAddress(...)
  // - contract.stakeCount(...)
  // - contract.stakeLists(...)
  // - contract.symbol(...)
  // - contract.totalSupply(...)
  // - contract.transfer(...)
  // - contract.transferFrom(...)
  // - contract.xfLobby(...)
  // - contract.xfLobbyEntry(...)
  // - contract.xfLobbyMembers(...)
  // - contract.xfLobbyPendingDays(...)
  // - contract.xfLobbyRange(...)
}

export function handleClaim(event: Claim): void {
  let id = event.params.btcAddr.toHexString();
  let _claim = _Claim.load(event.params.btcAddr.toHexString());

  if (_claim == null) {
    _claim = new _Claim(id);
  }
  
  _claim.btcAddr = event.params.btcAddr;
  _claim.claimToAddr = event.params.claimToAddr;
  _claim.referrerAddr = event.params.referrerAddr;
  _claim.data0 = event.params.data0;
  _claim.data1 = event.params.data1; 
  
  _claim.save();
}

export function handleClaimAssist(event: ClaimAssist): void {
 
  let id = event.params.senderAddr.toHexString();
  let _claimAssist = _ClaimAssist.load(event.params.senderAddr.toHexString());

  if (_claimAssist == null) {
    _claimAssist = new _ClaimAssist(id);
  }

  _claimAssist.senderAddr = event.params.senderAddr;  
  _claimAssist.data0 = event.params.data0;
  _claimAssist.data1 = event.params.data1;
  _claimAssist.data2 = event.params.data2;

  _claimAssist.save();
}

export function handleDailyDataUpdate(event: DailyDataUpdate): void {
  let d0 = event.params.data0;   
 
  let _d0 = convertDecimalToBinary(d0);
  
  let parsedData = new DailyDataUpdateData(_d0);

  let endDayIndex = parsedData.getEndDay(); 

  let id = endDayIndex.toString();
 
  let _dailyDataUpdate = _DailyDataUpdate.load(endDayIndex.toString());

  if (_dailyDataUpdate == null) {
    _dailyDataUpdate = new _DailyDataUpdate(id);
  }
 
  _dailyDataUpdate.updaterAddr = event.params.updaterAddr; 
  _dailyDataUpdate.data0 = event.params.data0;  
  _dailyDataUpdate.transactionHash = event.transaction.hash;

  _dailyDataUpdate.timestamp = parsedData.getTimestamp();
  _dailyDataUpdate.beginDay = parsedData.getBeginDay(); 
  _dailyDataUpdate.endDay = parsedData.getEndDay(); 
  _dailyDataUpdate.isAutoUpdate = parsedData.getIsAutoUpdate();

  let hexContract = Contract.bind(Address.fromString("0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39"));

  let _beginDay = BigInt.fromI32(parsedData.getBeginDay());
  let _endDay = BigInt.fromI32(parsedData.getEndDay()); 

  let dailyData0 = hexContract.dailyDataRange(_beginDay,_endDay);

  let _dd = convertDecimalToBinary(dailyData0[0]);

  let parsedDailyData = new DailyDataRangeData(_dd);

  _dailyDataUpdate.payout = parsedDailyData.getPayout(); 
  _dailyDataUpdate.shares = parsedDailyData.getShares(); 
  _dailyDataUpdate.sats = parsedDailyData.getSats();

  let parsedPayout = parsedDailyData.getPayout();
  let parsedShares = parsedDailyData.getShares();

  let zero = BigDecimal.fromString("0");
  let payoutHex: BigDecimal = zero; 
  let payoutPerTshare: BigDecimal = zero;

  if (parsedPayout != zero && parsedShares != zero){
    payoutHex = parsedPayout / BigDecimal.fromString("100000000"); 
    let tShares: BigDecimal = parsedShares / BigDecimal.fromString("1000000000000"); 
    payoutPerTshare = payoutHex / tShares;
  } 

  _dailyDataUpdate.payoutPerTShare = payoutPerTshare;
  let blockNumberBigDecimal = BigDecimal.fromString(event.block.number.toString());
  _dailyDataUpdate.blockNumber =  blockNumberBigDecimal;
  
  let tft = BigInt.fromI32(352);
  if(_endDay < tft){
    let lobbyEthEntered = hexContract.xfLobbyRange(_beginDay,_endDay);
    let lobbyHexAvailable = hexContract.dailyData(_beginDay);
    
    let _lobbyWeiEntered = lobbyEthEntered[0].toString();
    let _lobbyWeiEnteredDecimal = BigDecimal.fromString(_lobbyWeiEntered);
    let _lobbyEthEntered:BigDecimal = _lobbyWeiEnteredDecimal / BigDecimal.fromString("1000000000000000000");
    _dailyDataUpdate.lobbyEth = _lobbyEthEntered;
    let _lobbyHexAvailable = lobbyHexAvailable.value2.toString();
    //log.debug('the data1: {}, dailyData: {}', [lobbyEthEntered[0].toString(), lobbyHexAvailable.value2.toString()]);
  
    let _lobbyHexAvailableDecimal = ( BigDecimal.fromString(_lobbyHexAvailable) / BigDecimal.fromString("350") ) * BigDecimal.fromString("10000");
    
    _dailyDataUpdate.lobbyHexAvailable = _lobbyHexAvailableDecimal;
  
    _dailyDataUpdate.lobbyHexPerEth = (_lobbyHexAvailableDecimal / _lobbyEthEntered) / BigDecimal.fromString("100000000");
  }
 
  handleGlobalInfo(event.block.timestamp, event.block.number, event.transaction.hash, true);

  _dailyDataUpdate.save();
}

export function handleShareRateChange(event: ShareRateChange): void {
  let id = event.params.stakeId.toHexString()

  let _shareRateChange = _ShareRateChange.load(event.params.stakeId.toHexString());

  if (_shareRateChange == null) {
     _shareRateChange = new _ShareRateChange(id);
  }
 
  _shareRateChange.stakeId = event.params.stakeId; 
  _shareRateChange.data0 = event.params.data0;  

  let d0 = event.params.data0;  
  let _d0 = convertDecimalToBinary(d0);
  
  let parsedData = new ShareRateChangeData(event.params.data0);
 
  _shareRateChange.timestamp = parsedData.getTimestamp();
  _shareRateChange.shareRate = parsedData.getShareRate(); 
  _shareRateChange.transactionHash = event.transaction.hash;

  let shareRateDecimal = parsedData.getShareRate();
 
  let fiveBigDecimal = BigDecimal.fromString("100000");
  let hexHearts = BigDecimal.fromString("100000000");
  let tShare = BigDecimal.fromString("1000000000000"); 

  let sharesPerHeart = BigDecimal.fromString(shareRateDecimal.toString()).div(fiveBigDecimal);   
  let _sharesPerHeart = sharesPerHeart.toString();

  let tShareRateHearts = tShare.times(BigDecimal.fromString(_sharesPerHeart));   
  let tShareRateHex = tShareRateHearts.div(hexHearts);

  _shareRateChange.tShareRateHearts = tShareRateHearts; 
  _shareRateChange.tShareRateHex = tShareRateHex; 
   let blockNumberBigDecimal = BigDecimal.fromString(event.block.number.toString());
   _shareRateChange.blockNumber =  blockNumberBigDecimal;
 
  _shareRateChange.save();
}

export function handleStakeStart(event: StakeStart): void {
  let id = event.params.stakeId.toHexString()

  let _stakeStart = _StakeStart.load(event.params.stakeId.toHexString());

  if (_stakeStart == null) {
     _stakeStart = new _StakeStart(id);
  }

  _stakeStart.stakerAddr = event.params.stakerAddr; 
  _stakeStart.stakeId = event.params.stakeId; 
  _stakeStart.data0 = event.params.data0;
  _stakeStart.transactionHash = event.transaction.hash;

  if(event.receipt){
    _stakeStart.cumulativeGasUsed = event.receipt!.cumulativeGasUsed;
    _stakeStart.gasUsed = event.receipt!.gasUsed;
  }

  let d = (event.params.data0);  

  let _d = convertDecimalToBinary(d);

  let parsedData = new StakeStartData(event.params.data0, _d);
 
  _stakeStart.timestamp = parsedData.getTimestamp();
  _stakeStart.stakedHearts = parsedData.getStakedHearts();
  _stakeStart.stakeShares = parsedData.getStakedShares();
  _stakeStart.stakedDays = parsedData.getStakedDays();
  _stakeStart.isAutoStake = parsedData.getIsAutoStake(); 
  
  let hexHearts = BigDecimal.fromString("100000000");
  let tShare = BigDecimal.fromString("1000000000000"); 
  let sharesBigDecimal = BigDecimal.fromString(parsedData.getStakedShares().toString()); 

  let tShares = sharesBigDecimal.div(tShare);
  
  _stakeStart.stakeTShares = tShares; 

  let hexContract = Contract.bind(Address.fromString("0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39"));
  let currentDay = hexContract.currentDay();
  let startDay = currentDay.plus(BigInt.fromString("2"));

  _stakeStart.startDay = startDay;
  let endDay = startDay.plus(parsedData.getStakedDays());
  _stakeStart.endDay = endDay;

  let blockNumberBigDecimal = BigDecimal.fromString(event.block.number.toString());
  _stakeStart.blockNumber =  blockNumberBigDecimal;
   
  _stakeStart.save();
}

export function handleStakeEnd(event: StakeEnd): void {
 
  let id = event.params.stakeId.toHexString();
   
  let _stakeEnd = _StakeEnd.load(event.params.stakeId.toHexString());

  if (_stakeEnd == null) {
     _stakeEnd = new _StakeEnd(id);
  }
   
  _stakeEnd.stakerAddr = event.params.stakerAddr; 
  _stakeEnd.stakeId = event.params.stakeId; 
  _stakeEnd.data0 = event.params.data0;
  _stakeEnd.data1 = event.params.data1; 
  _stakeEnd.transactionHash = event.transaction.hash;

  if(event.receipt){
    _stakeEnd.cumulativeGasUsed = event.receipt!.cumulativeGasUsed;
    _stakeEnd.gasUsed = event.receipt!.gasUsed;
  }

  let d0 = event.params.data0; 
  let d1 = event.params.data1; 
  
  let _d0 = convertDecimalToBinary(d0);

  let _d1 = "0";
  let zero = BigInt.fromI32(0);
  if (d1 != zero) _d1 = convertDecimalToBinary(d1);

  let parsedData = new StakeEndData(event.params.data0, event.params.data1, _d0, _d1);
 
  _stakeEnd.timestamp = parsedData.getTimestamp();
  _stakeEnd.stakedHearts = parsedData.getStakedHearts();
  _stakeEnd.stakedShares = parsedData.getStakedShares();
  _stakeEnd.payout = parsedData.getPayout();
  _stakeEnd.penalty = parsedData.getPenalty();
  _stakeEnd.servedDays = parsedData.getServedDays();
  _stakeEnd.prevUnlocked = parsedData.getPrevUnlocked();
  
  let hexContract = Contract.bind(Address.fromString("0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39"));
  
  let currentDay = hexContract.currentDay();
  let one: BigInt = BigInt.fromString("1");
  currentDay = currentDay.plus(one);
  let startStakeId = event.params.stakeId.toHexString();

  let _stakeStart = _StakeStart.load(startStakeId)!;
  let dueDay: BigInt = _stakeStart.stakedDays.plus(_stakeStart.startDay);
  let daysLate: BigInt = BigInt.fromString("0");
  let daysEarly: BigInt = BigInt.fromString("0");
  
  if(currentDay > dueDay){
    daysLate = currentDay.minus(dueDay);
  }
  if(currentDay < dueDay){
    daysEarly = dueDay.minus(currentDay);
  }
  if(currentDay == dueDay){
    daysLate = BigInt.fromString("0");
    daysEarly = BigInt.fromString("0");
  }
  _stakeEnd.daysLate = daysLate;
  _stakeEnd.daysEarly = daysEarly;

  _stakeStart.stakeEnd = event.params.stakeId.toHexString();
  
  let blockNumberBigDecimal = BigDecimal.fromString(event.block.number.toString());
  _stakeEnd.blockNumber =  blockNumberBigDecimal;
   
   _stakeEnd.save(); 
   _stakeStart.save();
}

export function handleStakeGoodAccounting(event: StakeGoodAccounting): void {
  let id = event.params.stakeId.toHexString();

  let _stakeGoodAccounting = _StakeGoodAccounting.load(event.params.stakeId.toHexString());

  if (_stakeGoodAccounting == null) {
     _stakeGoodAccounting = new _StakeGoodAccounting(id);
  }

  _stakeGoodAccounting.stakerAddr = event.params.stakerAddr; 
  _stakeGoodAccounting.stakeId = event.params.stakeId; 
  _stakeGoodAccounting.data0 = event.params.data0;
  _stakeGoodAccounting.data1 = event.params.data1;
  _stakeGoodAccounting.transactionHash = event.transaction.hash;

  if(event.receipt){
    _stakeGoodAccounting.cumulativeGasUsed = event.receipt!.cumulativeGasUsed;
    _stakeGoodAccounting.gasUsed = event.receipt!.gasUsed;
  }

  let d0 = event.params.data0; 
  let d1 = event.params.data1;
  
  let _d0 = convertDecimalToBinary(d0);

  let _d1 = "0";
  let zero = BigInt.fromI32(0);
  if (d1 != zero) _d1 = convertDecimalToBinary(d1);

  let parsedData = new StakeGoodAccountingData(event.params.data0, event.params.data1, _d0, _d1);
 
  _stakeGoodAccounting.timestamp = parsedData.getTimestamp();
  _stakeGoodAccounting.stakedHearts = parsedData.getStakedHearts();
  _stakeGoodAccounting.stakedShares = parsedData.getStakedShares();
  _stakeGoodAccounting.payout = parsedData.getPayout();
  _stakeGoodAccounting.penalty = parsedData.getPenalty(); 

  let startStakeId = event.params.stakeId.toHexString();

  let _stakeStart = _StakeStart.load(startStakeId)!;
  _stakeStart.stakeGoodAccounting = event.params.stakeId.toHexString();

  let blockNumberBigDecimal = BigDecimal.fromString(event.block.number.toString());
  _stakeGoodAccounting.blockNumber =  blockNumberBigDecimal;
   
  _stakeGoodAccounting.save();
  _stakeStart.save();
   
}

export function handleXfLobbyEnter(event: XfLobbyEnter): void {

  let id = event.params.entryId.toHexString() + event.params.memberAddr.toHexString();

  let _xfLobbyEnter = _XfLobbyEnter.load(event.params.entryId.toHexString() + event.params.memberAddr.toHexString());

  if (_xfLobbyEnter == null) {
    _xfLobbyEnter = new _XfLobbyEnter(id);
  } 

  _xfLobbyEnter.data0 = event.params.data0; 
  _xfLobbyEnter.memberAddr = event.params.memberAddr; 
  _xfLobbyEnter.entryId = event.params.entryId; 
  _xfLobbyEnter.referrerAddr = event.params.referrerAddr; 
  _xfLobbyEnter.transactionHash = event.transaction.hash;

  let d0 = event.params.data0; 
  
  let _d0 = convertDecimalToBinary(d0);

  let parsedData = new XfLobbyEnterData(_d0);
 
  _xfLobbyEnter.timestamp = parsedData.getTimestamp();
  _xfLobbyEnter.rawAmount = parsedData.getRawAmount();

  let hexContract = Contract.bind(Address.fromString("0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39"));
  let currentDay = hexContract.currentDay();
  let _currentDay = currentDay.toBigDecimal();
  let day = _currentDay + BigDecimal.fromString("1");

  _xfLobbyEnter.enterDay = day;

  _xfLobbyEnter.save();
}

export function handleXfLobbyExit(event: XfLobbyExit): void {
  let id = event.params.entryId.toHexString() + event.params.memberAddr.toHexString();

  let _xfLobbyExit = _XfLobbyExit.load(event.params.entryId.toHexString() + event.params.memberAddr.toHexString());

  if (_xfLobbyExit == null) {
    _xfLobbyExit = new _XfLobbyExit(id);
  } 

  _xfLobbyExit.data0 = event.params.data0; 
  _xfLobbyExit.memberAddr = event.params.memberAddr; 
  _xfLobbyExit.entryId = event.params.entryId; 
  _xfLobbyExit.referrerAddr = event.params.referrerAddr;  
  _xfLobbyExit.transactionHash = event.transaction.hash;

  let d0 = event.params.data0; 
  
  let _d0 = convertDecimalToBinary(d0);

  let parsedData = new XfLobbyExitData(_d0);
 
  _xfLobbyExit.timestamp = parsedData.getTimestamp();
  _xfLobbyExit.xfAmount = parsedData.getXfAmount();
  
  let _XfLobbyEnterId = event.params.entryId.toHexString() + event.params.memberAddr.toHexString();

  let _xfLobbyEnter = _XfLobbyEnter.load(_XfLobbyEnterId)!;
  _xfLobbyEnter.xfLobbyExit = event.params.entryId.toHexString() + event.params.memberAddr.toHexString();
 


  _xfLobbyEnter.save();
  _xfLobbyExit.save();
  
}

export function handleTransfer(event: Transfer): void { 
  let _metaCount = _MetaCounts.load("Transfer");
  if (_metaCount == null) {
    _metaCount = new _MetaCounts("Transfer");
    let zero = BigInt.fromI32(0);
    _metaCount.count = zero;
  }
  let one = BigInt.fromI32(1);
  _metaCount.count = _metaCount.count.plus(one);
  _metaCount.save();

  let id = _metaCount.count.toString() + event.transaction.hash.toHexString();

  let _transfer = _Transfer.load(id);

  if (_transfer == null) {
    _transfer = new _Transfer(id);
  }

  let hexContract = Contract.bind(Address.fromString("0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39"));
  let currentDay = hexContract.currentDay();

  _transfer.numeralIndex = _metaCount.count;
  _transfer.transactionHash = event.transaction.hash;
  _transfer.gasLimit = event.transaction.gasLimit;
  _transfer.gasPrice = event.transaction.gasPrice;

  _transfer.input = event.transaction.input.toHexString();
  let methodId = parseInput(event.transaction.input);
  if(methodId != ""){
    _transfer.methodId =  methodId;
  }
  else{
    _transfer.methodId =  null; 
  }
  _transfer.from = event.params.from; 
  _transfer.to = event.params.to; 
  _transfer.value = event.params.value;
  _transfer.hexDay = currentDay;
  _transfer.timestamp = event.block.timestamp;
  _transfer.save();
 
  ///////TokenHolder from Update/////// 
  updateTokenHolder(event.params.from, event.params.value.toString(), '-', event.block.timestamp, event.block.number);

  ///////TokenHolder to Update///////
  updateTokenHolder(event.params.to, event.params.value.toString(), '+', event.block.timestamp, event.block.number);

}

function updateTokenHolder(address:Address, value: string, operator:string, eventTimestamp:BigInt, eventBlockNumber:BigInt): void {
  let Id = address.toHexString();

  let _tokenHolder = _TokenHolder.load(Id);
  let currentTokenBalance = BigDecimal.fromString("0"); 
  let currentTotalSent = BigDecimal.fromString("0"); 
  let currentTotalReceived = BigDecimal.fromString("0"); 
  let hexContract = Contract.bind(Address.fromString("0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39"));
  let currentDay = hexContract.currentDay();
  
  if (_tokenHolder == null) {
    _tokenHolder = new _TokenHolder(Id);
    _tokenHolder.totalSent = currentTotalSent;
    _tokenHolder.totalReceived = currentTotalReceived;
    _tokenHolder.createdTimeStamp = eventTimestamp;
    _tokenHolder.createdBlocknumber = eventBlockNumber;
    _tokenHolder.createdHexDay = currentDay;
    let _metaCount = _MetaCounts.load("TokenHolder");
    if (_metaCount == null) {
      _metaCount = new _MetaCounts("TokenHolder");
      let zero = BigInt.fromI32(0);
      _metaCount.count = zero;
    }
    let one = BigInt.fromI32(1);
    _metaCount.count = _metaCount.count.plus(one);
    _metaCount.save();
    _tokenHolder.numeralIndex = _metaCount.count;
  }
  else{
    currentTokenBalance = _tokenHolder.tokenBalance;
    if(operator == '+'){
      currentTotalReceived = _tokenHolder.totalReceived; 
    }
    if(operator == '-'){
      currentTotalSent = _tokenHolder.totalSent; 
    }
  }

  let valueBigDecimal:BigDecimal = BigDecimal.fromString(value);
  let newTokenBalance:BigDecimal = BigDecimal.fromString("0"); 
  let newTotalSent:BigDecimal = BigDecimal.fromString("0"); 
  let newTotalReceived:BigDecimal = BigDecimal.fromString("0"); 

  if(operator == '+'){
    newTokenBalance = currentTokenBalance + valueBigDecimal; 
    newTotalReceived = currentTotalReceived + valueBigDecimal; 
    _tokenHolder.totalReceived = newTotalReceived;
  }
  if(operator == '-'){
    newTokenBalance = currentTokenBalance - valueBigDecimal; 
    newTotalSent = currentTotalSent + valueBigDecimal;
    _tokenHolder.totalSent = newTotalSent;
  }
  _tokenHolder.lastModifiedHexDay = currentDay;
  _tokenHolder.lastModifiedTimeStamp = eventTimestamp;
  _tokenHolder.holderAddress = address;
  _tokenHolder.tokenBalance = newTokenBalance;
  
  _tokenHolder.save(); 
}

function handleGlobalInfo(eventTimestamp: BigInt, eventBlockNumber: BigInt, transactionHash: Bytes, bypassLimit: boolean):void{
  
  if(bypassLimit == false){  
    let limiter = BigInt.fromI32(240);
    let withinLimit = schemaLimiter("GlobalInfoLatestBlock", limiter, eventBlockNumber);
    if(withinLimit == false){
      return;
    }
  }

  let id = eventTimestamp.toString() + transactionHash.toHexString(); 
  let _globalInfo = _GlobalInfo.load(id);

  if (_globalInfo == null) {
    _globalInfo = new _GlobalInfo(id);
  }
  else {
    return;
  }
 
  let hexContract = Contract.bind(Address.fromString("0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39"));

  let one = BigInt.fromI32(1);
  let currentDay = hexContract.currentDay(); 
  let _currentDay = currentDay.plus(one);

  let globalInfo = hexContract.globalInfo();

  let lockedHeartsTotal = globalInfo[0];
  let nextStakeSharesTotal = globalInfo[1];
  let shareRate = globalInfo[2];
  let stakePenaltyTotal = globalInfo[3];
  let stakeSharesTotal = globalInfo[5];
  let latestStakeId = globalInfo[6]; 
  let totalHeartsinCirculation = globalInfo[11];
  
  _globalInfo.lockedHeartsTotal = lockedHeartsTotal;
  _globalInfo.nextStakeSharesTotal = nextStakeSharesTotal;
  _globalInfo.shareRate = shareRate;
  _globalInfo.stakePenaltyTotal = stakePenaltyTotal;
  _globalInfo.stakeSharesTotal = stakeSharesTotal;
  _globalInfo.latestStakeId = latestStakeId;
  _globalInfo.totalHeartsinCirculation = totalHeartsinCirculation;
  _globalInfo.hexDay = _currentDay;
  _globalInfo.timestamp = eventTimestamp;
  _globalInfo.blocknumber = eventBlockNumber; 
  _globalInfo.transactionHash = transactionHash;
  _globalInfo.totalMintedHearts = hexContract.allocatedSupply();
  _globalInfo.allocatedSupply = hexContract.allocatedSupply();
  _globalInfo.totalSupply = hexContract.totalSupply();

  let zero = BigInt.fromI32(0); 
  let _GlobalInfoMetaCount = _MetaCounts.load("GlobalInfo"); 
  if (_GlobalInfoMetaCount == null) {
    _GlobalInfoMetaCount = new _MetaCounts("GlobalInfo"); 
    _GlobalInfoMetaCount.count = zero;
  } 

  let _GlobalInfoDailyMetaCount = _MetaCounts.load("GlobalInfoDaily"); 
  if (_GlobalInfoDailyMetaCount == null) { 
    _GlobalInfoDailyMetaCount = new _MetaCounts("GlobalInfoDaily"); 
    _GlobalInfoDailyMetaCount.count = _currentDay
    
  } 
  if(_currentDay > _GlobalInfoDailyMetaCount.count){
    _GlobalInfoMetaCount.count = zero
  }
  _GlobalInfoDailyMetaCount.count = _currentDay

  _GlobalInfoMetaCount.count = _GlobalInfoMetaCount.count.plus(one);

  let countString = _GlobalInfoMetaCount.count.toString();
  let metaIdBigDecimal = BigDecimal.fromString(countString);
  _globalInfo.globalInfoCount = metaIdBigDecimal;
  
  _GlobalInfoDailyMetaCount.save();
  _GlobalInfoMetaCount.save();
  _globalInfo.save();
}

function schemaLimiter(metaCountName: string, limiter: BigInt, eventBlockNumber: BigInt): boolean{
  let validSave = false; 
  let metaCount = _MetaCounts.load(metaCountName);
  if (metaCount == null) {
    metaCount = new _MetaCounts(metaCountName); 
    metaCount.count = eventBlockNumber;
  } 
  if (metaCount != null) {
    let nextValidBlock = metaCount.count + limiter; 
    if(nextValidBlock < eventBlockNumber){ 
      metaCount.count = eventBlockNumber;
      validSave = true;
    } 
  } 

  metaCount.save();

  return validSave;
}

export function handleBlock(block: ethereum.Block):void{
  handleGlobalInfo(block.timestamp, block.number, block.hash, false);
}