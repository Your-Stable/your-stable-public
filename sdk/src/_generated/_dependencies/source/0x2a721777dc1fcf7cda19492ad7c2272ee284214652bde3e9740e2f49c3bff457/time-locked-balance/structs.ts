import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../../../_framework/util";
import {Balance} from "../../0x2/balance/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== TimeLockedBalance =============================== */

export function isTimeLockedBalance(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::time_locked_balance::TimeLockedBalance` + '<'); }

export interface TimeLockedBalanceFields<T extends PhantomTypeArgument> { lockedBalance: ToField<Balance<T>>; unlockStartTsSec: ToField<"u64">; unlockPerSecond: ToField<"u64">; unlockedBalance: ToField<Balance<T>>; finalUnlockTsSec: ToField<"u64">; previousUnlockAt: ToField<"u64"> }

export type TimeLockedBalanceReified<T extends PhantomTypeArgument> = Reified< TimeLockedBalance<T>, TimeLockedBalanceFields<T> >;

export class TimeLockedBalance<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::time_locked_balance::TimeLockedBalance`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = TimeLockedBalance.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::time_locked_balance::TimeLockedBalance<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = TimeLockedBalance.$isPhantom;

 readonly lockedBalance: ToField<Balance<T>>; readonly unlockStartTsSec: ToField<"u64">; readonly unlockPerSecond: ToField<"u64">; readonly unlockedBalance: ToField<Balance<T>>; readonly finalUnlockTsSec: ToField<"u64">; readonly previousUnlockAt: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: TimeLockedBalanceFields<T>, ) { this.$fullTypeName = composeSuiType( TimeLockedBalance.$typeName, ...typeArgs ) as `${typeof PKG_V1}::time_locked_balance::TimeLockedBalance<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.lockedBalance = fields.lockedBalance;; this.unlockStartTsSec = fields.unlockStartTsSec;; this.unlockPerSecond = fields.unlockPerSecond;; this.unlockedBalance = fields.unlockedBalance;; this.finalUnlockTsSec = fields.finalUnlockTsSec;; this.previousUnlockAt = fields.previousUnlockAt; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): TimeLockedBalanceReified<ToPhantomTypeArgument<T>> { return { typeName: TimeLockedBalance.$typeName, fullTypeName: composeSuiType( TimeLockedBalance.$typeName, ...[extractType(T)] ) as `${typeof PKG_V1}::time_locked_balance::TimeLockedBalance<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: TimeLockedBalance.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => TimeLockedBalance.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TimeLockedBalance.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => TimeLockedBalance.fromBcs( T, data, ), bcs: TimeLockedBalance.bcs, fromJSONField: (field: any) => TimeLockedBalance.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => TimeLockedBalance.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => TimeLockedBalance.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => TimeLockedBalance.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => TimeLockedBalance.fetch( client, T, id, ), new: ( fields: TimeLockedBalanceFields<ToPhantomTypeArgument<T>>, ) => { return new TimeLockedBalance( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return TimeLockedBalance.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<TimeLockedBalance<ToPhantomTypeArgument<T>>>> { return phantom(TimeLockedBalance.reified( T )); } static get p() { return TimeLockedBalance.phantom }

 static get bcs() { return bcs.struct("TimeLockedBalance", {

 locked_balance: Balance.bcs, unlock_start_ts_sec: bcs.u64(), unlock_per_second: bcs.u64(), unlocked_balance: Balance.bcs, final_unlock_ts_sec: bcs.u64(), previous_unlock_at: bcs.u64()

}) };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): TimeLockedBalance<ToPhantomTypeArgument<T>> { return TimeLockedBalance.reified( typeArg, ).new( { lockedBalance: decodeFromFields(Balance.reified(typeArg), fields.locked_balance), unlockStartTsSec: decodeFromFields("u64", fields.unlock_start_ts_sec), unlockPerSecond: decodeFromFields("u64", fields.unlock_per_second), unlockedBalance: decodeFromFields(Balance.reified(typeArg), fields.unlocked_balance), finalUnlockTsSec: decodeFromFields("u64", fields.final_unlock_ts_sec), previousUnlockAt: decodeFromFields("u64", fields.previous_unlock_at) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): TimeLockedBalance<ToPhantomTypeArgument<T>> { if (!isTimeLockedBalance(item.type)) { throw new Error("not a TimeLockedBalance type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return TimeLockedBalance.reified( typeArg, ).new( { lockedBalance: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.locked_balance), unlockStartTsSec: decodeFromFieldsWithTypes("u64", item.fields.unlock_start_ts_sec), unlockPerSecond: decodeFromFieldsWithTypes("u64", item.fields.unlock_per_second), unlockedBalance: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.unlocked_balance), finalUnlockTsSec: decodeFromFieldsWithTypes("u64", item.fields.final_unlock_ts_sec), previousUnlockAt: decodeFromFieldsWithTypes("u64", item.fields.previous_unlock_at) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): TimeLockedBalance<ToPhantomTypeArgument<T>> { return TimeLockedBalance.fromFields( typeArg, TimeLockedBalance.bcs.parse(data) ) }

 toJSONField() { return {

 lockedBalance: this.lockedBalance.toJSONField(),unlockStartTsSec: this.unlockStartTsSec.toString(),unlockPerSecond: this.unlockPerSecond.toString(),unlockedBalance: this.unlockedBalance.toJSONField(),finalUnlockTsSec: this.finalUnlockTsSec.toString(),previousUnlockAt: this.previousUnlockAt.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): TimeLockedBalance<ToPhantomTypeArgument<T>> { return TimeLockedBalance.reified( typeArg, ).new( { lockedBalance: decodeFromJSONField(Balance.reified(typeArg), field.lockedBalance), unlockStartTsSec: decodeFromJSONField("u64", field.unlockStartTsSec), unlockPerSecond: decodeFromJSONField("u64", field.unlockPerSecond), unlockedBalance: decodeFromJSONField(Balance.reified(typeArg), field.unlockedBalance), finalUnlockTsSec: decodeFromJSONField("u64", field.finalUnlockTsSec), previousUnlockAt: decodeFromJSONField("u64", field.previousUnlockAt) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): TimeLockedBalance<ToPhantomTypeArgument<T>> { if (json.$typeName !== TimeLockedBalance.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(TimeLockedBalance.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return TimeLockedBalance.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): TimeLockedBalance<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTimeLockedBalance(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TimeLockedBalance object`); } return TimeLockedBalance.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): TimeLockedBalance<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTimeLockedBalance(data.bcs.type)) { throw new Error(`object at is not a TimeLockedBalance object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return TimeLockedBalance.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TimeLockedBalance.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<TimeLockedBalance<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TimeLockedBalance object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTimeLockedBalance(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TimeLockedBalance object`); }

 return TimeLockedBalance.fromSuiObjectData( typeArg, res.data ); }

 }
