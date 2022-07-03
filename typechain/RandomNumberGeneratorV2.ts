/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface RandomNumberGeneratorV2Interface extends utils.Interface {
  contractName: "RandomNumberGeneratorV2";
  functions: {
    "getSRandomWords()": FunctionFragment;
    "rawFulfillRandomWords(uint256,uint256[])": FunctionFragment;
    "requestRandomWords()": FunctionFragment;
    "s_randomWords(uint256)": FunctionFragment;
    "s_requestId()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getSRandomWords",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rawFulfillRandomWords",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "requestRandomWords",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "s_randomWords",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "s_requestId",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getSRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rawFulfillRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "s_randomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "s_requestId",
    data: BytesLike
  ): Result;

  events: {
    "ReturnedRandomness(uint256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ReturnedRandomness"): EventFragment;
}

export type ReturnedRandomnessEvent = TypedEvent<
  [BigNumber[]],
  { randomWords: BigNumber[] }
>;

export type ReturnedRandomnessEventFilter =
  TypedEventFilter<ReturnedRandomnessEvent>;

export interface RandomNumberGeneratorV2 extends BaseContract {
  contractName: "RandomNumberGeneratorV2";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RandomNumberGeneratorV2Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getSRandomWords(
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { _s_randomWords: BigNumber[] }>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestRandomWords(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    s_randomWords(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    s_requestId(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  getSRandomWords(overrides?: CallOverrides): Promise<BigNumber[]>;

  rawFulfillRandomWords(
    requestId: BigNumberish,
    randomWords: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestRandomWords(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  s_randomWords(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  s_requestId(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getSRandomWords(overrides?: CallOverrides): Promise<BigNumber[]>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    requestRandomWords(overrides?: CallOverrides): Promise<void>;

    s_randomWords(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    s_requestId(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "ReturnedRandomness(uint256[])"(
      randomWords?: null
    ): ReturnedRandomnessEventFilter;
    ReturnedRandomness(randomWords?: null): ReturnedRandomnessEventFilter;
  };

  estimateGas: {
    getSRandomWords(overrides?: CallOverrides): Promise<BigNumber>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestRandomWords(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    s_randomWords(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    s_requestId(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getSRandomWords(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestRandomWords(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    s_randomWords(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    s_requestId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
