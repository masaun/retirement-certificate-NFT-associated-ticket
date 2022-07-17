/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
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

export interface ITicketManagerFactoryInterface extends utils.Interface {
  contractName: "ITicketManagerFactory";
  functions: {
    "createTicketManager(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createTicketManager",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "createTicketManager",
    data: BytesLike
  ): Result;

  events: {
    "TicketManagerCreated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TicketManagerCreated"): EventFragment;
}

export type TicketManagerCreatedEvent = TypedEvent<
  [string, string],
  { ticketManager: string; retirementCertificateNFTAssociatedTicket: string }
>;

export type TicketManagerCreatedEventFilter =
  TypedEventFilter<TicketManagerCreatedEvent>;

export interface ITicketManagerFactory extends BaseContract {
  contractName: "ITicketManagerFactory";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITicketManagerFactoryInterface;

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
    createTicketManager(
      _retirementCertificateNFTAssociatedTicket: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  createTicketManager(
    _retirementCertificateNFTAssociatedTicket: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createTicketManager(
      _retirementCertificateNFTAssociatedTicket: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "TicketManagerCreated(address,address)"(
      ticketManager?: null,
      retirementCertificateNFTAssociatedTicket?: null
    ): TicketManagerCreatedEventFilter;
    TicketManagerCreated(
      ticketManager?: null,
      retirementCertificateNFTAssociatedTicket?: null
    ): TicketManagerCreatedEventFilter;
  };

  estimateGas: {
    createTicketManager(
      _retirementCertificateNFTAssociatedTicket: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createTicketManager(
      _retirementCertificateNFTAssociatedTicket: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
