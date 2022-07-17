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

export interface IRetirementCertificateNFTAssociatedTicketFactoryInterface
  extends utils.Interface {
  contractName: "IRetirementCertificateNFTAssociatedTicketFactory";
  functions: {
    "createBatchRetirementCertificateNFTAssociatedTicket(address,uint256[],uint256[],address,string)": FunctionFragment;
    "createRetirementCertificateNFTAssociatedTicket(address,uint256,uint256,address,string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createBatchRetirementCertificateNFTAssociatedTicket",
    values: [string, BigNumberish[], BigNumberish[], string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createRetirementCertificateNFTAssociatedTicket",
    values: [string, BigNumberish, BigNumberish, string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "createBatchRetirementCertificateNFTAssociatedTicket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createRetirementCertificateNFTAssociatedTicket",
    data: BytesLike
  ): Result;

  events: {
    "BatchRetirementCertificateNFTAssociatedTicketCreated(address,address,uint256[],uint256[],address,string,address)": EventFragment;
    "RetirementCertificateNFTAssociatedTicketCreated(address,address,uint256,uint256,address,string,address)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "BatchRetirementCertificateNFTAssociatedTicketCreated"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "RetirementCertificateNFTAssociatedTicketCreated"
  ): EventFragment;
}

export type BatchRetirementCertificateNFTAssociatedTicketCreatedEvent =
  TypedEvent<
    [string, string, BigNumber[], BigNumber[], string, string, string],
    {
      retirementCertificateNFTAssociatedTicket: string;
      to: string;
      ticketTypes: BigNumber[];
      mintAmounts: BigNumber[];
      retirementCertificateNFT: string;
      uri: string;
      ticketManager: string;
    }
  >;

export type BatchRetirementCertificateNFTAssociatedTicketCreatedEventFilter =
  TypedEventFilter<BatchRetirementCertificateNFTAssociatedTicketCreatedEvent>;

export type RetirementCertificateNFTAssociatedTicketCreatedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, string, string, string],
  {
    retirementCertificateNFTAssociatedTicket: string;
    to: string;
    ticketType: BigNumber;
    mintAmount: BigNumber;
    retirementCertificateNFT: string;
    uri: string;
    ticketManager: string;
  }
>;

export type RetirementCertificateNFTAssociatedTicketCreatedEventFilter =
  TypedEventFilter<RetirementCertificateNFTAssociatedTicketCreatedEvent>;

export interface IRetirementCertificateNFTAssociatedTicketFactory
  extends BaseContract {
  contractName: "IRetirementCertificateNFTAssociatedTicketFactory";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRetirementCertificateNFTAssociatedTicketFactoryInterface;

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
    createBatchRetirementCertificateNFTAssociatedTicket(
      to: string,
      ticketTypes: BigNumberish[],
      mintAmounts: BigNumberish[],
      retirementCertificateNFT: string,
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createRetirementCertificateNFTAssociatedTicket(
      to: string,
      ticketType: BigNumberish,
      mintAmount: BigNumberish,
      retirementCertificateNFT: string,
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  createBatchRetirementCertificateNFTAssociatedTicket(
    to: string,
    ticketTypes: BigNumberish[],
    mintAmounts: BigNumberish[],
    retirementCertificateNFT: string,
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createRetirementCertificateNFTAssociatedTicket(
    to: string,
    ticketType: BigNumberish,
    mintAmount: BigNumberish,
    retirementCertificateNFT: string,
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createBatchRetirementCertificateNFTAssociatedTicket(
      to: string,
      ticketTypes: BigNumberish[],
      mintAmounts: BigNumberish[],
      retirementCertificateNFT: string,
      uri: string,
      overrides?: CallOverrides
    ): Promise<void>;

    createRetirementCertificateNFTAssociatedTicket(
      to: string,
      ticketType: BigNumberish,
      mintAmount: BigNumberish,
      retirementCertificateNFT: string,
      uri: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BatchRetirementCertificateNFTAssociatedTicketCreated(address,address,uint256[],uint256[],address,string,address)"(
      retirementCertificateNFTAssociatedTicket?: null,
      to?: null,
      ticketTypes?: null,
      mintAmounts?: null,
      retirementCertificateNFT?: null,
      uri?: null,
      ticketManager?: null
    ): BatchRetirementCertificateNFTAssociatedTicketCreatedEventFilter;
    BatchRetirementCertificateNFTAssociatedTicketCreated(
      retirementCertificateNFTAssociatedTicket?: null,
      to?: null,
      ticketTypes?: null,
      mintAmounts?: null,
      retirementCertificateNFT?: null,
      uri?: null,
      ticketManager?: null
    ): BatchRetirementCertificateNFTAssociatedTicketCreatedEventFilter;

    "RetirementCertificateNFTAssociatedTicketCreated(address,address,uint256,uint256,address,string,address)"(
      retirementCertificateNFTAssociatedTicket?: null,
      to?: null,
      ticketType?: null,
      mintAmount?: null,
      retirementCertificateNFT?: null,
      uri?: null,
      ticketManager?: null
    ): RetirementCertificateNFTAssociatedTicketCreatedEventFilter;
    RetirementCertificateNFTAssociatedTicketCreated(
      retirementCertificateNFTAssociatedTicket?: null,
      to?: null,
      ticketType?: null,
      mintAmount?: null,
      retirementCertificateNFT?: null,
      uri?: null,
      ticketManager?: null
    ): RetirementCertificateNFTAssociatedTicketCreatedEventFilter;
  };

  estimateGas: {
    createBatchRetirementCertificateNFTAssociatedTicket(
      to: string,
      ticketTypes: BigNumberish[],
      mintAmounts: BigNumberish[],
      retirementCertificateNFT: string,
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createRetirementCertificateNFTAssociatedTicket(
      to: string,
      ticketType: BigNumberish,
      mintAmount: BigNumberish,
      retirementCertificateNFT: string,
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createBatchRetirementCertificateNFTAssociatedTicket(
      to: string,
      ticketTypes: BigNumberish[],
      mintAmounts: BigNumberish[],
      retirementCertificateNFT: string,
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createRetirementCertificateNFTAssociatedTicket(
      to: string,
      ticketType: BigNumberish,
      mintAmount: BigNumberish,
      retirementCertificateNFT: string,
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
