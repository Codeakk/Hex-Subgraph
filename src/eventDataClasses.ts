import { Address, BigDecimal, BigInt, ByteArray, Bytes, log } from "@graphprotocol/graph-ts"

function conversionMagic(binaryStr: string): string { //forgive me
    let v1 = parseInt(binaryStr,2);  
    let v2 = BigDecimal.fromString(v1.toString());
    return v2.toString();  
}

function binaryStrToU32(binaryStr: string): u32 {
    let v1 = parseInt(binaryStr,2);   
    let v2: u32 = v1 as u32;
    return v2;  
}

function binaryStrToBigDecimal(binaryStr: string): BigDecimal {
    let v1 = parseInt(binaryStr,2);    
    let v2 = v1.toString();
    let v3 = BigDecimal.fromString(v2);
    return v3;  
}


function binaryStrToBoolean(binaryStr: string): boolean { 
    let v1 = parseInt(binaryStr,2);
    let v2: boolean = false as boolean;
    if(v1 === 1) v2 = true;
    else v2 = false;     
   // log.debug('the binaryStrToBoolean: {} , {} , {}', [binaryStr, v1.toString(), v2.toString()]);
    return v2;  
}

export class StakeEndData {
/*  StakeEnd          (auto-generated event) 
    uint40            timestamp       -->  data0 [ 39:  0]
    address  indexed  stakerAddr
    uint40   indexed  stakeId
    uint72            stakedHearts    -->  data0 [111: 40]
    uint72            stakeShares     -->  data0 [183:112]
    uint72            payout          -->  data0 [255:184]
    uint72            penalty         -->  data1 [ 71:  0]
    uint16            servedDays      -->  data1 [ 87: 72]
    bool              prevUnlocked    -->  data1 [ 95: 88]
*/
    timestamp: BigInt;
    stakedHearts: BigInt;
    stakeShares: BigInt;
    payout: BigInt;
    penalty: BigInt;
    servedDays: BigInt;
    prevUnlocked: boolean;

    constructor(data0: BigInt, data1: BigInt, data0BinaryStr: string, data1BinaryStr: string) {  

        this.timestamp = data0.bitAnd(BigInt.fromI32(1).leftShift(40).minus(BigInt.fromI32(1)));
        this.stakedHearts = data0.rightShift(40).bitAnd(BigInt.fromI32(1).leftShift(72).minus(BigInt.fromI32(1)));
        this.stakeShares = data0.rightShift(112).bitAnd(BigInt.fromI32(1).leftShift(72).minus(BigInt.fromI32(1)));

        if(data0BinaryStr.length >= 184){ 
            this.payout = data0.rightShift(184).bitAnd(BigInt.fromI32(1).leftShift(72).minus(BigInt.fromI32(1)));
        } 
        else this.payout = BigInt.fromString("0");

        if(data1BinaryStr != "0"){ 
            this.penalty = data1.bitAnd(BigInt.fromI32(1).leftShift(72).minus(BigInt.fromI32(1)));

            if(data1BinaryStr.length >= 72){ 
                this.servedDays = data1.rightShift(72).bitAnd(BigInt.fromI32(1).leftShift(16).minus(BigInt.fromI32(1)));
            }
            else this.servedDays = BigInt.fromString("0");

            if(data1BinaryStr.length >= 88){ 
                let prevUnlockedSlice = data1BinaryStr.slice(-95,-88);  
                this.prevUnlocked = binaryStrToBoolean(prevUnlockedSlice); 
            }
            else {
                let v3: boolean = false as boolean;
                this.prevUnlocked = v3;
            }
        }
        else{
            this.penalty = BigInt.fromString("0");
            this.servedDays = BigInt.fromString("0");
            let v3: boolean = false as boolean;
            this.prevUnlocked = v3;
        } 
    }
    
    getTimestamp(): BigInt {
        return this.timestamp;
    }
    getStakedHearts(): BigInt {
        return this.stakedHearts;
    }
    getStakedShares(): BigInt {
        return this.stakeShares;
    }
    getPayout(): BigInt {
        return this.payout;
    }
    getPenalty(): BigInt {
        return this.penalty;
    }
    getServedDays(): BigInt {
        return this.servedDays;
    }
    getPrevUnlocked(): boolean {
        return this.prevUnlocked;
    }
}

export class StakeStartData {
/*  StakeStart        (auto-generated event) 
    uint40            timestamp       -->  data0 [ 39:  0]
    address  indexed  stakerAddr
    uint40   indexed  stakeId
    uint72            stakedHearts    -->  data0 [111: 40]
    uint72            stakeShares     -->  data0 [183:112]
    uint16            stakedDays      -->  data0 [199:184]
    bool              isAutoStake     -->  data0 [207:200]
*/
    timestamp: BigInt;
    stakedHearts: BigInt;
    stakeShares: BigInt;
    stakedDays: BigInt;
    isAutoStake: boolean; 

    constructor(data0: BigInt, data0BinaryStr: string) {    

        this.timestamp = data0.bitAnd(BigInt.fromI32(1).leftShift(40).minus(BigInt.fromI32(1)));
        this.stakedHearts = data0.rightShift(40).bitAnd(BigInt.fromI32(1).leftShift(72).minus(BigInt.fromI32(1)));
        this.stakeShares = data0.rightShift(112).bitAnd(BigInt.fromI32(1).leftShift(72).minus(BigInt.fromI32(1)));
        this.stakedDays = data0.rightShift(184).bitAnd(BigInt.fromI32(1).leftShift(16).minus(BigInt.fromI32(1)));
          
        if(data0BinaryStr.length >= 200){ 
        let isAutoStakeSlice = data0BinaryStr.slice(-207,-200);  
        this.isAutoStake = binaryStrToBoolean(isAutoStakeSlice);  
    }
    else {
        let v1: boolean = false as boolean;
        this.isAutoStake = v1;
    }
 
    }
    
    getTimestamp(): BigInt {
        return this.timestamp;
    }
    getStakedHearts(): BigInt {
        return this.stakedHearts;
    }
    getStakedShares(): BigInt {
        return this.stakeShares;
    }
    getStakedDays(): BigInt {
        return this.stakedDays;
    }
    getIsAutoStake(): boolean {
        return this.isAutoStake;
    }
}
 
export class StakeGoodAccountingData {
/*  StakeGoodAccounting(auto-generated event)
    uint40            timestamp       -->  data0 [ 39:  0]
    address  indexed  stakerAddr
    uint40   indexed  stakeId
    uint72            stakedHearts    -->  data0 [111: 40]
    uint72            stakeShares     -->  data0 [183:112]
    uint72            payout          -->  data0 [255:184]
    uint72            penalty         -->  data1 [ 71:  0]
    address  indexed  senderAddr
*/
    timestamp: BigInt;
    stakedHearts: BigInt;
    stakeShares: BigInt;
    payout: BigInt;
    penalty: BigInt; 

    constructor(data0: BigInt, data1: BigInt, data0BinaryStr: string, data1BinaryStr: string) {

        this.timestamp = data0.bitAnd(BigInt.fromI32(1).leftShift(40).minus(BigInt.fromI32(1)));
        this.stakedHearts = data0.rightShift(40).bitAnd(BigInt.fromI32(1).leftShift(72).minus(BigInt.fromI32(1)));
        this.stakeShares = data0.rightShift(112).bitAnd(BigInt.fromI32(1).leftShift(72).minus(BigInt.fromI32(1)));

        if(data0BinaryStr.length >= 184){ 
            this.payout = data0.rightShift(184).bitAnd(BigInt.fromI32(1).leftShift(72).minus(BigInt.fromI32(1)));
        } 
        else this.payout = BigInt.fromString("0");
        
        if(data1BinaryStr != "0"){
            this.penalty = data1.bitAnd(BigInt.fromI32(1).leftShift(72).minus(BigInt.fromI32(1)));
        }
        else this.penalty = BigInt.fromString("0");
        
    }

    getTimestamp(): BigInt {
        return this.timestamp;
    }
    getStakedHearts(): BigInt {
        return this.stakedHearts;
    }
    getStakedShares(): BigInt {
        return this.stakeShares;
    }
    getPayout(): BigInt {
        return this.payout;
    }
    getPenalty(): BigInt {
        return this.penalty;
    }
}

export class ShareRateChangeData {
/*  ShareRateChange   (auto-generated event) 
    uint40            timestamp       -->  data0 [ 39:  0]
    uint40            shareRate       -->  data0 [ 79: 40]
    uint40   indexed  stakeId
*/
    timestamp: BigInt;
    shareRate: BigInt; 

    constructor(data0: BigInt) {   
        this.timestamp = data0.bitAnd(BigInt.fromI32(1).leftShift(40).minus(BigInt.fromI32(1)));
        this.shareRate = data0.rightShift(40).bitAnd(BigInt.fromI32(1).leftShift(40).minus(BigInt.fromI32(1)));
    }

    getTimestamp(): BigInt {
        return this.timestamp;
    }
    getShareRate(): BigInt {
        return this.shareRate;
    }
}

export class ClaimData {
/*  Claim             (auto-generated event)
    uint40            timestamp       -->  data0 [ 39:  0]
    bytes20  indexed  btcAddr
    uint56            rawSatoshis     -->  data0 [ 95: 40]
    uint56            adjSatoshis     -->  data0 [151: 96]
    address  indexed  claimToAddr
    uint8             claimFlags      -->  data0 [159:152]
    uint72            claimedHearts   -->  data0 [231:160]
    address  indexed  referrerAddr
    address           senderAddr      -->  data1 [159:  0]
*/
    timestamp: String;
    rawSatoshis: String;
    adjSatoshis: String; 
    claimFlags: String; 
    claimedHearts: String;
    senderAddr: String; 

    constructor(data0BinaryStr: string,data1BinaryStr: string) {  
        //log.debug('the data0BinaryStr: {}', [data0BinaryStr.toString()]);
        //log.debug('the data1BinaryStr: {}', [data1BinaryStr.toString()]); 
        let timestampSlice = data0BinaryStr.slice(-39); 
        this.timestamp = conversionMagic(timestampSlice);

        let rawSatoshisSlice = data0BinaryStr.slice(-95,-40);    
        this.rawSatoshis = conversionMagic(rawSatoshisSlice);

        let adjSatoshisSlice = data0BinaryStr.slice(-151,-96);    
        this.adjSatoshis = conversionMagic(adjSatoshisSlice);
 
        let claimFlagsSlice = data0BinaryStr.slice(-159,-152);    
        this.claimFlags = conversionMagic(claimFlagsSlice);
        
        let claimedHeartsSlice = data0BinaryStr.slice(-231,-160);    
        this.claimedHearts = conversionMagic(claimedHeartsSlice);

        let senderAddrSlice = data1BinaryStr.slice(-159);    
        this.senderAddr = senderAddrSlice;
        
    }

    getTimestamp(): String {
        return this.timestamp;
    } 
    getRawSatoshis(): String {
        return this.rawSatoshis;
    }
    getAdjSatoshis(): String {
        return this.adjSatoshis;
    } 
    getClaimFlags(): String {
        return this.claimFlags;
    }
    getClaimedHearts(): String {
        return this.claimedHearts;
    }
    getSenderAddr(): String {
        return this.senderAddr;
    }
}

export class ClaimAssistData {
/*  ClaimAssist       (auto-generated event)
    uint40            timestamp       -->  data0 [ 39:  0]
    bytes20           btcAddr         -->  data0 [199: 40]
    uint56            rawSatoshis     -->  data0 [255:200]
    uint56            adjSatoshis     -->  data1 [ 55:  0]
    address           claimToAddr     -->  data1 [215: 56]
    uint8             claimFlags      -->  data1 [223:216]
    uint72            claimedHearts   -->  data2 [ 71:  0]
    address           referrerAddr    -->  data2 [231: 72]
    address  indexed  senderAddr
*/
    timestamp: String;
    btcAddr: String; 
    rawSatoshis: String;
    adjSatoshis: String; 
    claimToAddr: String;
    claimFlags: String; 
    claimedHearts: String;
    referrerAddr: String; 

    constructor(data0BinaryStr: string,data1BinaryStr: string,data2BinaryStr: string) {  
        //log.debug('the data0BinaryStr: {}', [data0BinaryStr.toString()]);
        //log.debug('the data1BinaryStr: {}', [data1BinaryStr.toString()]);
        //log.debug('the data2BinaryStr: {}', [data2BinaryStr.toString()]);
        let timestampSlice = data0BinaryStr.slice(-39); 
        this.timestamp = conversionMagic(timestampSlice);

        let btcAddrSlice = data0BinaryStr.slice(-199,-40);    
        this.btcAddr = btcAddrSlice;
        
        let rawSatoshisSlice = data0BinaryStr.slice(-255,-200);    
        this.rawSatoshis = conversionMagic(rawSatoshisSlice);

        let adjSatoshisSlice = data1BinaryStr.slice(-55);    
        this.adjSatoshis = conversionMagic(adjSatoshisSlice);

        let claimToAddrSlice = data1BinaryStr.slice(-215,-56);    
        this.claimToAddr = claimToAddrSlice;

        let claimFlagsSlice = data1BinaryStr.slice(-223,-216);    
        this.claimFlags = conversionMagic(claimFlagsSlice);
        
        let claimedHeartsSlice = data2BinaryStr.slice(-223,-216);    
        this.claimedHearts = conversionMagic(claimedHeartsSlice);

        let referrerAddrSlice = data2BinaryStr.slice(-215,-56); 
        this.referrerAddr = referrerAddrSlice;
    }

    getTimestamp(): String {
        return this.timestamp;
    }
    getBtcAddr(): String {
        return this.btcAddr;
    }
    getRawSatoshis(): String {
        return this.rawSatoshis;
    }
    getAdjSatoshis(): String {
        return this.adjSatoshis;
    }
    getClaimToAddr(): String {
        return this.claimToAddr;
    }
    getClaimFlags(): String {
        return this.claimFlags;
    }
    getClaimedHearts(): String {
        return this.claimedHearts;
    }
    getReferrerAddr(): String {
        return this.referrerAddr;
    }
}

export class DailyDataUpdateData {
/*  DailyDataUpdate   (auto-generated event) 
    uint40            timestamp       -->  data0 [ 39:  0]
    uint16            beginDay        -->  data0 [ 55: 40]
    uint16            endDay          -->  data0 [ 71: 56]
    bool              isAutoUpdate    -->  data0 [ 79: 72]
    address  indexed  updaterAddr
*/
        timestamp: BigDecimal;
        beginDay: u32;
        endDay: u32;
        isAutoUpdate: boolean;
    
        constructor(data0BinaryStr: string) {  
            //log.debug('the data0BinaryStr: {}', [data0BinaryStr.toString()]); 
            let timestampSlice = data0BinaryStr.slice(-39); 
            this.timestamp = binaryStrToBigDecimal(timestampSlice);

            if(data0BinaryStr.length >= 40){  
                let beginDaySlice = data0BinaryStr.slice(-55,-40);  
                this.beginDay = binaryStrToU32(beginDaySlice);  
            } 
            else {
                let v1: u32 = 0 as u32; 
                this.beginDay = v1;
            }

            if(data0BinaryStr.length >= 56){  
                let endDaySlice = data0BinaryStr.slice(-71,-56);  
                this.endDay = binaryStrToU32(endDaySlice);  
            }
            else {
                let v2: u32 = 0 as u32;
                this.endDay = v2;
            }

            if(data0BinaryStr.length >= 72){   
                let isAutoUpdateSlice = data0BinaryStr.slice(-79,-72);  
                this.isAutoUpdate = binaryStrToBoolean(isAutoUpdateSlice);  
            }
            else {
                let v3: boolean = false as boolean;
                this.isAutoUpdate = v3;
            }
        }
    
        getTimestamp(): BigDecimal {
            return this.timestamp;
        }
        getBeginDay(): u32 {
            return this.beginDay;
        }
        getEndDay(): u32 {
            return this.endDay;
        }
        getIsAutoUpdate(): boolean {
            return this.isAutoUpdate;
        }
    }

export class DailyDataRangeData {
    payout: BigDecimal;
    shares: BigDecimal;
    sats: BigDecimal; 

    constructor(data0BinaryStr: string) {  
       // log.debug('the data0BinaryStr: {}', [data0BinaryStr.toString()]); 
 
        let payoutSlice = data0BinaryStr.slice(-71); 
        this.payout = binaryStrToBigDecimal(payoutSlice);
        //log.debug('the payout: {}, {}', [payoutSlice.toString(), this.payout.toString()]); 

        if(data0BinaryStr.length >= 72){  
            let sharesSlice = data0BinaryStr.slice(-143,-72);   
            this.shares = binaryStrToBigDecimal(sharesSlice);  
           // log.debug('the shares: {}, {}', [sharesSlice.toString(), this.shares.toString()]); 
        } 
        else {
            let v1: BigDecimal = BigDecimal.fromString("0"); 
            this.shares = v1;
        }

        if(data0BinaryStr.length >= 144){  
            let satsSlice = data0BinaryStr.slice(-data0BinaryStr.length,-144);  
            this.sats = binaryStrToBigDecimal(satsSlice);  
        }
        else {
            let v1: BigDecimal = BigDecimal.fromString("0"); 
            this.sats = v1;
        } 
    }

    getPayout(): BigDecimal {
        return this.payout;
    }
    getShares(): BigDecimal {
        return this.shares;
    }
    getSats(): BigDecimal {
        return this.sats;
    } 
}

export class XfLobbyEnterData {
    /*  XfLobbyEnter      (auto-generated event)
        uint40            timestamp       -->  data0 [ 39:  0]
        address  indexed  memberAddr
        uint256  indexed  entryId
        uint96            rawAmount       -->  data0 [135: 40]
        address  indexed  referrerAddr
    */
        timestamp: BigDecimal;
        rawAmount: BigDecimal; 
    
        constructor(data0BinaryStr: string) {  
            //log.debug('the data0BinaryStr: {}', [data0BinaryStr.toString()]);
            //log.debug('the data1BinaryStr: {}', [data1BinaryStr.toString()]);
            let timestampSlice = data0BinaryStr.slice(-39); 
            this.timestamp = binaryStrToBigDecimal(timestampSlice);

            if(data0BinaryStr.length >= 40){  
                let rawAmountSlice = data0BinaryStr.slice(-135,-40);  
                this.rawAmount = binaryStrToBigDecimal(rawAmountSlice);  
            }
            else {
                let v1: BigDecimal = BigDecimal.fromString("0"); 
                this.rawAmount = v1;
            }

        }
    
        getTimestamp(): BigDecimal {
            return this.timestamp;
        }
        getRawAmount(): BigDecimal {
            return this.rawAmount;
        }
}


export class XfLobbyExitData {
     /*  XfLobbyExit       (auto-generated event)

        uint40            timestamp       -->  data0 [ 39:  0]
        address  indexed  memberAddr
        uint256  indexed  entryId
        uint72            xfAmount        -->  data0 [111: 40]
        address  indexed  referrerAddr
    */
        timestamp: BigDecimal;
        xfAmount: BigDecimal; 
    
        constructor(data0BinaryStr: string) {  
            //log.debug('the data0BinaryStr: {}', [data0BinaryStr.toString()]);
            //log.debug('the data1BinaryStr: {}', [data1BinaryStr.toString()]);
            let timestampSlice = data0BinaryStr.slice(-39); 
            this.timestamp = binaryStrToBigDecimal(timestampSlice);

            if(data0BinaryStr.length >= 40){  
                let xfAmountSlice = data0BinaryStr.slice(-111,-40);  
                this.xfAmount = binaryStrToBigDecimal(xfAmountSlice);
            }  
            else {
                let v1: BigDecimal = BigDecimal.fromString("0"); 
                this.xfAmount = v1;
            }
        }
    
        getTimestamp(): BigDecimal {
            return this.timestamp;
        }
        getXfAmount(): BigDecimal {
            return this.xfAmount;
        }
}