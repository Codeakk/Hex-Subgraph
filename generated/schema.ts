// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ExampleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ExampleEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ExampleEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ExampleEntity", id.toString(), this);
  }

  static load(id: string): ExampleEntity | null {
    return store.get("ExampleEntity", id) as ExampleEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get spender(): Bytes {
    let value = this.get("spender");
    return value.toBytes();
  }

  set spender(value: Bytes) {
    this.set("spender", Value.fromBytes(value));
  }
}

export class _StakeStart extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save _StakeStart entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save _StakeStart entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("_StakeStart", id.toString(), this);
  }

  static load(id: string): _StakeStart | null {
    return store.get("_StakeStart", id) as _StakeStart | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get stakerAddr(): Bytes {
    let value = this.get("stakerAddr");
    return value.toBytes();
  }

  set stakerAddr(value: Bytes) {
    this.set("stakerAddr", Value.fromBytes(value));
  }

  get stakeId(): BigInt {
    let value = this.get("stakeId");
    return value.toBigInt();
  }

  set stakeId(value: BigInt) {
    this.set("stakeId", Value.fromBigInt(value));
  }

  get data0(): BigInt {
    let value = this.get("data0");
    return value.toBigInt();
  }

  set data0(value: BigInt) {
    this.set("data0", Value.fromBigInt(value));
  }

  get timestamp(): BigDecimal {
    let value = this.get("timestamp");
    return value.toBigDecimal();
  }

  set timestamp(value: BigDecimal) {
    this.set("timestamp", Value.fromBigDecimal(value));
  }

  get stakedHearts(): BigDecimal {
    let value = this.get("stakedHearts");
    return value.toBigDecimal();
  }

  set stakedHearts(value: BigDecimal) {
    this.set("stakedHearts", Value.fromBigDecimal(value));
  }

  get stakeShares(): BigDecimal {
    let value = this.get("stakeShares");
    return value.toBigDecimal();
  }

  set stakeShares(value: BigDecimal) {
    this.set("stakeShares", Value.fromBigDecimal(value));
  }

  get stakedDays(): BigDecimal {
    let value = this.get("stakedDays");
    return value.toBigDecimal();
  }

  set stakedDays(value: BigDecimal) {
    this.set("stakedDays", Value.fromBigDecimal(value));
  }

  get isAutoStake(): boolean {
    let value = this.get("isAutoStake");
    return value.toBoolean();
  }

  set isAutoStake(value: boolean) {
    this.set("isAutoStake", Value.fromBoolean(value));
  }

  get stakeTShares(): BigDecimal {
    let value = this.get("stakeTShares");
    return value.toBigDecimal();
  }

  set stakeTShares(value: BigDecimal) {
    this.set("stakeTShares", Value.fromBigDecimal(value));
  }

  get startDay(): BigDecimal {
    let value = this.get("startDay");
    return value.toBigDecimal();
  }

  set startDay(value: BigDecimal) {
    this.set("startDay", Value.fromBigDecimal(value));
  }

  get endDay(): BigDecimal {
    let value = this.get("endDay");
    return value.toBigDecimal();
  }

  set endDay(value: BigDecimal) {
    this.set("endDay", Value.fromBigDecimal(value));
  }

  get stakeEnd(): string | null {
    let value = this.get("stakeEnd");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set stakeEnd(value: string | null) {
    if (value === null) {
      this.unset("stakeEnd");
    } else {
      this.set("stakeEnd", Value.fromString(value as string));
    }
  }

  get stakeGoodAccounting(): string | null {
    let value = this.get("stakeGoodAccounting");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set stakeGoodAccounting(value: string | null) {
    if (value === null) {
      this.unset("stakeGoodAccounting");
    } else {
      this.set("stakeGoodAccounting", Value.fromString(value as string));
    }
  }

  get blockNumber(): BigDecimal {
    let value = this.get("blockNumber");
    return value.toBigDecimal();
  }

  set blockNumber(value: BigDecimal) {
    this.set("blockNumber", Value.fromBigDecimal(value));
  }
}

export class _StakeEnd extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save _StakeEnd entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save _StakeEnd entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("_StakeEnd", id.toString(), this);
  }

  static load(id: string): _StakeEnd | null {
    return store.get("_StakeEnd", id) as _StakeEnd | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get stakerAddr(): Bytes {
    let value = this.get("stakerAddr");
    return value.toBytes();
  }

  set stakerAddr(value: Bytes) {
    this.set("stakerAddr", Value.fromBytes(value));
  }

  get stakeId(): BigInt {
    let value = this.get("stakeId");
    return value.toBigInt();
  }

  set stakeId(value: BigInt) {
    this.set("stakeId", Value.fromBigInt(value));
  }

  get data0(): BigInt {
    let value = this.get("data0");
    return value.toBigInt();
  }

  set data0(value: BigInt) {
    this.set("data0", Value.fromBigInt(value));
  }

  get data1(): BigInt {
    let value = this.get("data1");
    return value.toBigInt();
  }

  set data1(value: BigInt) {
    this.set("data1", Value.fromBigInt(value));
  }

  get payout(): BigDecimal {
    let value = this.get("payout");
    return value.toBigDecimal();
  }

  set payout(value: BigDecimal) {
    this.set("payout", Value.fromBigDecimal(value));
  }

  get stakedHearts(): BigDecimal {
    let value = this.get("stakedHearts");
    return value.toBigDecimal();
  }

  set stakedHearts(value: BigDecimal) {
    this.set("stakedHearts", Value.fromBigDecimal(value));
  }

  get stakedShares(): BigDecimal {
    let value = this.get("stakedShares");
    return value.toBigDecimal();
  }

  set stakedShares(value: BigDecimal) {
    this.set("stakedShares", Value.fromBigDecimal(value));
  }

  get timestamp(): BigDecimal {
    let value = this.get("timestamp");
    return value.toBigDecimal();
  }

  set timestamp(value: BigDecimal) {
    this.set("timestamp", Value.fromBigDecimal(value));
  }

  get penalty(): BigDecimal {
    let value = this.get("penalty");
    return value.toBigDecimal();
  }

  set penalty(value: BigDecimal) {
    this.set("penalty", Value.fromBigDecimal(value));
  }

  get servedDays(): BigDecimal {
    let value = this.get("servedDays");
    return value.toBigDecimal();
  }

  set servedDays(value: BigDecimal) {
    this.set("servedDays", Value.fromBigDecimal(value));
  }

  get prevUnlocked(): boolean {
    let value = this.get("prevUnlocked");
    return value.toBoolean();
  }

  set prevUnlocked(value: boolean) {
    this.set("prevUnlocked", Value.fromBoolean(value));
  }

  get daysLate(): BigDecimal {
    let value = this.get("daysLate");
    return value.toBigDecimal();
  }

  set daysLate(value: BigDecimal) {
    this.set("daysLate", Value.fromBigDecimal(value));
  }

  get blockNumber(): BigDecimal {
    let value = this.get("blockNumber");
    return value.toBigDecimal();
  }

  set blockNumber(value: BigDecimal) {
    this.set("blockNumber", Value.fromBigDecimal(value));
  }
}

export class _StakeGoodAccounting extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save _StakeGoodAccounting entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save _StakeGoodAccounting entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("_StakeGoodAccounting", id.toString(), this);
  }

  static load(id: string): _StakeGoodAccounting | null {
    return store.get("_StakeGoodAccounting", id) as _StakeGoodAccounting | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get stakerAddr(): Bytes {
    let value = this.get("stakerAddr");
    return value.toBytes();
  }

  set stakerAddr(value: Bytes) {
    this.set("stakerAddr", Value.fromBytes(value));
  }

  get stakeId(): BigInt {
    let value = this.get("stakeId");
    return value.toBigInt();
  }

  set stakeId(value: BigInt) {
    this.set("stakeId", Value.fromBigInt(value));
  }

  get data0(): BigInt {
    let value = this.get("data0");
    return value.toBigInt();
  }

  set data0(value: BigInt) {
    this.set("data0", Value.fromBigInt(value));
  }

  get data1(): BigInt {
    let value = this.get("data1");
    return value.toBigInt();
  }

  set data1(value: BigInt) {
    this.set("data1", Value.fromBigInt(value));
  }

  get payout(): BigDecimal {
    let value = this.get("payout");
    return value.toBigDecimal();
  }

  set payout(value: BigDecimal) {
    this.set("payout", Value.fromBigDecimal(value));
  }

  get stakedHearts(): BigDecimal {
    let value = this.get("stakedHearts");
    return value.toBigDecimal();
  }

  set stakedHearts(value: BigDecimal) {
    this.set("stakedHearts", Value.fromBigDecimal(value));
  }

  get stakedShares(): BigDecimal {
    let value = this.get("stakedShares");
    return value.toBigDecimal();
  }

  set stakedShares(value: BigDecimal) {
    this.set("stakedShares", Value.fromBigDecimal(value));
  }

  get timestamp(): BigDecimal {
    let value = this.get("timestamp");
    return value.toBigDecimal();
  }

  set timestamp(value: BigDecimal) {
    this.set("timestamp", Value.fromBigDecimal(value));
  }

  get penalty(): BigDecimal {
    let value = this.get("penalty");
    return value.toBigDecimal();
  }

  set penalty(value: BigDecimal) {
    this.set("penalty", Value.fromBigDecimal(value));
  }

  get blockNumber(): BigDecimal {
    let value = this.get("blockNumber");
    return value.toBigDecimal();
  }

  set blockNumber(value: BigDecimal) {
    this.set("blockNumber", Value.fromBigDecimal(value));
  }
}

export class _ShareRateChange extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save _ShareRateChange entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save _ShareRateChange entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("_ShareRateChange", id.toString(), this);
  }

  static load(id: string): _ShareRateChange | null {
    return store.get("_ShareRateChange", id) as _ShareRateChange | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get stakeId(): BigInt {
    let value = this.get("stakeId");
    return value.toBigInt();
  }

  set stakeId(value: BigInt) {
    this.set("stakeId", Value.fromBigInt(value));
  }

  get data0(): BigInt {
    let value = this.get("data0");
    return value.toBigInt();
  }

  set data0(value: BigInt) {
    this.set("data0", Value.fromBigInt(value));
  }

  get timestamp(): BigDecimal {
    let value = this.get("timestamp");
    return value.toBigDecimal();
  }

  set timestamp(value: BigDecimal) {
    this.set("timestamp", Value.fromBigDecimal(value));
  }

  get shareRate(): BigDecimal {
    let value = this.get("shareRate");
    return value.toBigDecimal();
  }

  set shareRate(value: BigDecimal) {
    this.set("shareRate", Value.fromBigDecimal(value));
  }

  get tShareRateHearts(): BigDecimal {
    let value = this.get("tShareRateHearts");
    return value.toBigDecimal();
  }

  set tShareRateHearts(value: BigDecimal) {
    this.set("tShareRateHearts", Value.fromBigDecimal(value));
  }

  get tShareRateHex(): BigDecimal {
    let value = this.get("tShareRateHex");
    return value.toBigDecimal();
  }

  set tShareRateHex(value: BigDecimal) {
    this.set("tShareRateHex", Value.fromBigDecimal(value));
  }

  get blockNumber(): BigDecimal {
    let value = this.get("blockNumber");
    return value.toBigDecimal();
  }

  set blockNumber(value: BigDecimal) {
    this.set("blockNumber", Value.fromBigDecimal(value));
  }
}

export class _Claim extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save _Claim entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save _Claim entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("_Claim", id.toString(), this);
  }

  static load(id: string): _Claim | null {
    return store.get("_Claim", id) as _Claim | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get data0(): BigInt {
    let value = this.get("data0");
    return value.toBigInt();
  }

  set data0(value: BigInt) {
    this.set("data0", Value.fromBigInt(value));
  }

  get data1(): BigInt {
    let value = this.get("data1");
    return value.toBigInt();
  }

  set data1(value: BigInt) {
    this.set("data1", Value.fromBigInt(value));
  }

  get btcAddr(): Bytes {
    let value = this.get("btcAddr");
    return value.toBytes();
  }

  set btcAddr(value: Bytes) {
    this.set("btcAddr", Value.fromBytes(value));
  }

  get claimToAddr(): Bytes {
    let value = this.get("claimToAddr");
    return value.toBytes();
  }

  set claimToAddr(value: Bytes) {
    this.set("claimToAddr", Value.fromBytes(value));
  }

  get referrerAddr(): Bytes {
    let value = this.get("referrerAddr");
    return value.toBytes();
  }

  set referrerAddr(value: Bytes) {
    this.set("referrerAddr", Value.fromBytes(value));
  }
}

export class _ClaimAssist extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save _ClaimAssist entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save _ClaimAssist entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("_ClaimAssist", id.toString(), this);
  }

  static load(id: string): _ClaimAssist | null {
    return store.get("_ClaimAssist", id) as _ClaimAssist | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get data0(): BigInt {
    let value = this.get("data0");
    return value.toBigInt();
  }

  set data0(value: BigInt) {
    this.set("data0", Value.fromBigInt(value));
  }

  get data1(): BigInt {
    let value = this.get("data1");
    return value.toBigInt();
  }

  set data1(value: BigInt) {
    this.set("data1", Value.fromBigInt(value));
  }

  get data2(): BigInt {
    let value = this.get("data2");
    return value.toBigInt();
  }

  set data2(value: BigInt) {
    this.set("data2", Value.fromBigInt(value));
  }

  get senderAddr(): Bytes {
    let value = this.get("senderAddr");
    return value.toBytes();
  }

  set senderAddr(value: Bytes) {
    this.set("senderAddr", Value.fromBytes(value));
  }
}

export class _DailyDataUpdate extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save _DailyDataUpdate entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save _DailyDataUpdate entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("_DailyDataUpdate", id.toString(), this);
  }

  static load(id: string): _DailyDataUpdate | null {
    return store.get("_DailyDataUpdate", id) as _DailyDataUpdate | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get updaterAddr(): Bytes {
    let value = this.get("updaterAddr");
    return value.toBytes();
  }

  set updaterAddr(value: Bytes) {
    this.set("updaterAddr", Value.fromBytes(value));
  }

  get data0(): BigInt {
    let value = this.get("data0");
    return value.toBigInt();
  }

  set data0(value: BigInt) {
    this.set("data0", Value.fromBigInt(value));
  }

  get timestamp(): BigDecimal {
    let value = this.get("timestamp");
    return value.toBigDecimal();
  }

  set timestamp(value: BigDecimal) {
    this.set("timestamp", Value.fromBigDecimal(value));
  }

  get beginDay(): i32 {
    let value = this.get("beginDay");
    return value.toI32();
  }

  set beginDay(value: i32) {
    this.set("beginDay", Value.fromI32(value));
  }

  get endDay(): i32 {
    let value = this.get("endDay");
    return value.toI32();
  }

  set endDay(value: i32) {
    this.set("endDay", Value.fromI32(value));
  }

  get isAutoUpdate(): boolean {
    let value = this.get("isAutoUpdate");
    return value.toBoolean();
  }

  set isAutoUpdate(value: boolean) {
    this.set("isAutoUpdate", Value.fromBoolean(value));
  }

  get payout(): BigDecimal {
    let value = this.get("payout");
    return value.toBigDecimal();
  }

  set payout(value: BigDecimal) {
    this.set("payout", Value.fromBigDecimal(value));
  }

  get shares(): BigDecimal {
    let value = this.get("shares");
    return value.toBigDecimal();
  }

  set shares(value: BigDecimal) {
    this.set("shares", Value.fromBigDecimal(value));
  }

  get sats(): BigDecimal {
    let value = this.get("sats");
    return value.toBigDecimal();
  }

  set sats(value: BigDecimal) {
    this.set("sats", Value.fromBigDecimal(value));
  }

  get payoutPerTShare(): BigDecimal {
    let value = this.get("payoutPerTShare");
    return value.toBigDecimal();
  }

  set payoutPerTShare(value: BigDecimal) {
    this.set("payoutPerTShare", Value.fromBigDecimal(value));
  }

  get blockNumber(): BigDecimal {
    let value = this.get("blockNumber");
    return value.toBigDecimal();
  }

  set blockNumber(value: BigDecimal) {
    this.set("blockNumber", Value.fromBigDecimal(value));
  }

  get lobbyEth(): BigDecimal | null {
    let value = this.get("lobbyEth");
    if (value === null) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set lobbyEth(value: BigDecimal | null) {
    if (value === null) {
      this.unset("lobbyEth");
    } else {
      this.set("lobbyEth", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get lobbyHexAvailable(): BigDecimal | null {
    let value = this.get("lobbyHexAvailable");
    if (value === null) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set lobbyHexAvailable(value: BigDecimal | null) {
    if (value === null) {
      this.unset("lobbyHexAvailable");
    } else {
      this.set("lobbyHexAvailable", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get lobbyHexPerEth(): BigDecimal | null {
    let value = this.get("lobbyHexPerEth");
    if (value === null) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set lobbyHexPerEth(value: BigDecimal | null) {
    if (value === null) {
      this.unset("lobbyHexPerEth");
    } else {
      this.set("lobbyHexPerEth", Value.fromBigDecimal(value as BigDecimal));
    }
  }
}

export class _XfLobbyEnter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save _XfLobbyEnter entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save _XfLobbyEnter entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("_XfLobbyEnter", id.toString(), this);
  }

  static load(id: string): _XfLobbyEnter | null {
    return store.get("_XfLobbyEnter", id) as _XfLobbyEnter | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigDecimal {
    let value = this.get("timestamp");
    return value.toBigDecimal();
  }

  set timestamp(value: BigDecimal) {
    this.set("timestamp", Value.fromBigDecimal(value));
  }

  get memberAddr(): Bytes {
    let value = this.get("memberAddr");
    return value.toBytes();
  }

  set memberAddr(value: Bytes) {
    this.set("memberAddr", Value.fromBytes(value));
  }

  get entryId(): BigInt {
    let value = this.get("entryId");
    return value.toBigInt();
  }

  set entryId(value: BigInt) {
    this.set("entryId", Value.fromBigInt(value));
  }

  get rawAmount(): BigDecimal {
    let value = this.get("rawAmount");
    return value.toBigDecimal();
  }

  set rawAmount(value: BigDecimal) {
    this.set("rawAmount", Value.fromBigDecimal(value));
  }

  get referrerAddr(): Bytes {
    let value = this.get("referrerAddr");
    return value.toBytes();
  }

  set referrerAddr(value: Bytes) {
    this.set("referrerAddr", Value.fromBytes(value));
  }

  get xfLobbyExit(): string | null {
    let value = this.get("xfLobbyExit");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set xfLobbyExit(value: string | null) {
    if (value === null) {
      this.unset("xfLobbyExit");
    } else {
      this.set("xfLobbyExit", Value.fromString(value as string));
    }
  }

  get data0(): BigInt {
    let value = this.get("data0");
    return value.toBigInt();
  }

  set data0(value: BigInt) {
    this.set("data0", Value.fromBigInt(value));
  }

  get enterDay(): BigDecimal {
    let value = this.get("enterDay");
    return value.toBigDecimal();
  }

  set enterDay(value: BigDecimal) {
    this.set("enterDay", Value.fromBigDecimal(value));
  }
}

export class _XfLobbyExit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save _XfLobbyExit entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save _XfLobbyExit entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("_XfLobbyExit", id.toString(), this);
  }

  static load(id: string): _XfLobbyExit | null {
    return store.get("_XfLobbyExit", id) as _XfLobbyExit | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigDecimal {
    let value = this.get("timestamp");
    return value.toBigDecimal();
  }

  set timestamp(value: BigDecimal) {
    this.set("timestamp", Value.fromBigDecimal(value));
  }

  get memberAddr(): Bytes {
    let value = this.get("memberAddr");
    return value.toBytes();
  }

  set memberAddr(value: Bytes) {
    this.set("memberAddr", Value.fromBytes(value));
  }

  get entryId(): BigInt {
    let value = this.get("entryId");
    return value.toBigInt();
  }

  set entryId(value: BigInt) {
    this.set("entryId", Value.fromBigInt(value));
  }

  get xfAmount(): BigDecimal {
    let value = this.get("xfAmount");
    return value.toBigDecimal();
  }

  set xfAmount(value: BigDecimal) {
    this.set("xfAmount", Value.fromBigDecimal(value));
  }

  get referrerAddr(): Bytes {
    let value = this.get("referrerAddr");
    return value.toBytes();
  }

  set referrerAddr(value: Bytes) {
    this.set("referrerAddr", Value.fromBytes(value));
  }

  get data0(): BigInt {
    let value = this.get("data0");
    return value.toBigInt();
  }

  set data0(value: BigInt) {
    this.set("data0", Value.fromBigInt(value));
  }
}

export class _TokenHolder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save _TokenHolder entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save _TokenHolder entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("_TokenHolder", id.toString(), this);
  }

  static load(id: string): _TokenHolder | null {
    return store.get("_TokenHolder", id) as _TokenHolder | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get holderAddress(): Bytes {
    let value = this.get("holderAddress");
    return value.toBytes();
  }

  set holderAddress(value: Bytes) {
    this.set("holderAddress", Value.fromBytes(value));
  }

  get totalSent(): BigDecimal {
    let value = this.get("totalSent");
    return value.toBigDecimal();
  }

  set totalSent(value: BigDecimal) {
    this.set("totalSent", Value.fromBigDecimal(value));
  }

  get totalReceived(): BigDecimal {
    let value = this.get("totalReceived");
    return value.toBigDecimal();
  }

  set totalReceived(value: BigDecimal) {
    this.set("totalReceived", Value.fromBigDecimal(value));
  }

  get tokenBalance(): BigDecimal {
    let value = this.get("tokenBalance");
    return value.toBigDecimal();
  }

  set tokenBalance(value: BigDecimal) {
    this.set("tokenBalance", Value.fromBigDecimal(value));
  }
}

export class _Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save _Transfer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save _Transfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("_Transfer", id.toString(), this);
  }

  static load(id: string): _Transfer | null {
    return store.get("_Transfer", id) as _Transfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}
