/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { BaseContract, BigNumber, Signer, utils } from "ethers";
import { EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface EventsInterface extends utils.Interface {
  contractName: "Events";
  functions: {};

  events: {
    "BatchRetirementCertificateNFTAssociatedTicketCreated(address,address,uint256[],uint256[],address,string)": EventFragment;
    "RetirementCertificateNFTAssociatedTicketCreated(address,address,uint256,uint256,address,string)": EventFragment;
    "TicketManagerCreated(address,address)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "BatchRetirementCertificateNFTAssociatedTicketCreated"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "RetirementCertificateNFTAssociatedTicketCreated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TicketManagerCreated"): EventFragment;
}

export type BatchRetirementCertificateNFTAssociatedTicketCreatedEvent =
  TypedEvent<
    [string, string, BigNumber[], BigNumber[], string, string],
    {
      retirementCertificateNFTAssociatedTicket: string;
      to: string;
      ticketTypes: BigNumber[];
      mintAmounts: BigNumber[];
      retirementCertificateNFT: string;
      uri: string;
    }
  >;

export type BatchRetirementCertificateNFTAssociatedTicketCreatedEventFilter =
  TypedEventFilter<BatchRetirementCertificateNFTAssociatedTicketCreatedEvent>;

export type RetirementCertificateNFTAssociatedTicketCreatedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, string, string],
  {
    retirementCertificateNFTAssociatedTicket: string;
    to: string;
    ticketType: BigNumber;
    mintAmount: BigNumber;
    retirementCertificateNFT: string;
    uri: string;
  }
>;

export type RetirementCertificateNFTAssociatedTicketCreatedEventFilter =
  TypedEventFilter<RetirementCertificateNFTAssociatedTicketCreatedEvent>;

export type TicketManagerCreatedEvent = TypedEvent<
  [string, string],
  { ticketManager: string; retirementCertificateNFTAssociatedTicket: string }
>;

export type TicketManagerCreatedEventFilter =
  TypedEventFilter<TicketManagerCreatedEvent>;

export interface Events extends BaseContract {
  contractName: "Events";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EventsInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "BatchRetirementCertificateNFTAssociatedTicketCreated(address,address,uint256[],uint256[],address,string)"(
      retirementCertificateNFTAssociatedTicket?: null,
      to?: null,
      ticketTypes?: null,
      mintAmounts?: null,
      retirementCertificateNFT?: null,
      uri?: null
    ): BatchRetirementCertificateNFTAssociatedTicketCreatedEventFilter;
    BatchRetirementCertificateNFTAssociatedTicketCreated(
      retirementCertificateNFTAssociatedTicket?: null,
      to?: null,
      ticketTypes?: null,
      mintAmounts?: null,
      retirementCertificateNFT?: null,
      uri?: null
    ): BatchRetirementCertificateNFTAssociatedTicketCreatedEventFilter;

    "RetirementCertificateNFTAssociatedTicketCreated(address,address,uint256,uint256,address,string)"(
      retirementCertificateNFTAssociatedTicket?: null,
      to?: null,
      ticketType?: null,
      mintAmount?: null,
      retirementCertificateNFT?: null,
      uri?: null
    ): RetirementCertificateNFTAssociatedTicketCreatedEventFilter;
    RetirementCertificateNFTAssociatedTicketCreated(
      retirementCertificateNFTAssociatedTicket?: null,
      to?: null,
      ticketType?: null,
      mintAmount?: null,
      retirementCertificateNFT?: null,
      uri?: null
    ): RetirementCertificateNFTAssociatedTicketCreatedEventFilter;

    "TicketManagerCreated(address,address)"(
      ticketManager?: null,
      retirementCertificateNFTAssociatedTicket?: null
    ): TicketManagerCreatedEventFilter;
    TicketManagerCreated(
      ticketManager?: null,
      retirementCertificateNFTAssociatedTicket?: null
    ): TicketManagerCreatedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
