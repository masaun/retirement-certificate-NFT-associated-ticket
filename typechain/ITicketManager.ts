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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ITicketManagerInterface extends utils.Interface {
  contractName: "ITicketManager";
  functions: {
    "checkWhetherRetirementCertificateNFTAssociatedTicketHasAlreadyBeenRedeemedOrNot(address,uint256)": FunctionFragment;
    "claimBatchRetirementCertificateNFTAssociatedTicket(address,uint256[],uint256[],uint256[])": FunctionFragment;
    "claimRetirementCertificateNFTAssociatedTicket(address,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "checkWhetherRetirementCertificateNFTAssociatedTicketHasAlreadyBeenRedeemedOrNot",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimBatchRetirementCertificateNFTAssociatedTicket",
    values: [string, BigNumberish[], BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRetirementCertificateNFTAssociatedTicket",
    values: [string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkWhetherRetirementCertificateNFTAssociatedTicketHasAlreadyBeenRedeemedOrNot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimBatchRetirementCertificateNFTAssociatedTicket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRetirementCertificateNFTAssociatedTicket",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ITicketManager extends BaseContract {
  contractName: "ITicketManager";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITicketManagerInterface;

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
    checkWhetherRetirementCertificateNFTAssociatedTicketHasAlreadyBeenRedeemedOrNot(
      retirementCertificateNFT: string,
      tokenIdOfRetirementCertificateNFT: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    claimBatchRetirementCertificateNFTAssociatedTicket(
      retirementCertificateNFT: string,
      tokenIdOfRetirementCertificateNFTs: BigNumberish[],
      ticketTypes: BigNumberish[],
      numberOfTickets: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimRetirementCertificateNFTAssociatedTicket(
      retirementCertificateNFT: string,
      tokenIdOfRetirementCertificateNFT: BigNumberish,
      ticketType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  checkWhetherRetirementCertificateNFTAssociatedTicketHasAlreadyBeenRedeemedOrNot(
    retirementCertificateNFT: string,
    tokenIdOfRetirementCertificateNFT: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  claimBatchRetirementCertificateNFTAssociatedTicket(
    retirementCertificateNFT: string,
    tokenIdOfRetirementCertificateNFTs: BigNumberish[],
    ticketTypes: BigNumberish[],
    numberOfTickets: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimRetirementCertificateNFTAssociatedTicket(
    retirementCertificateNFT: string,
    tokenIdOfRetirementCertificateNFT: BigNumberish,
    ticketType: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    checkWhetherRetirementCertificateNFTAssociatedTicketHasAlreadyBeenRedeemedOrNot(
      retirementCertificateNFT: string,
      tokenIdOfRetirementCertificateNFT: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    claimBatchRetirementCertificateNFTAssociatedTicket(
      retirementCertificateNFT: string,
      tokenIdOfRetirementCertificateNFTs: BigNumberish[],
      ticketTypes: BigNumberish[],
      numberOfTickets: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    claimRetirementCertificateNFTAssociatedTicket(
      retirementCertificateNFT: string,
      tokenIdOfRetirementCertificateNFT: BigNumberish,
      ticketType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    checkWhetherRetirementCertificateNFTAssociatedTicketHasAlreadyBeenRedeemedOrNot(
      retirementCertificateNFT: string,
      tokenIdOfRetirementCertificateNFT: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimBatchRetirementCertificateNFTAssociatedTicket(
      retirementCertificateNFT: string,
      tokenIdOfRetirementCertificateNFTs: BigNumberish[],
      ticketTypes: BigNumberish[],
      numberOfTickets: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimRetirementCertificateNFTAssociatedTicket(
      retirementCertificateNFT: string,
      tokenIdOfRetirementCertificateNFT: BigNumberish,
      ticketType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkWhetherRetirementCertificateNFTAssociatedTicketHasAlreadyBeenRedeemedOrNot(
      retirementCertificateNFT: string,
      tokenIdOfRetirementCertificateNFT: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimBatchRetirementCertificateNFTAssociatedTicket(
      retirementCertificateNFT: string,
      tokenIdOfRetirementCertificateNFTs: BigNumberish[],
      ticketTypes: BigNumberish[],
      numberOfTickets: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimRetirementCertificateNFTAssociatedTicket(
      retirementCertificateNFT: string,
      tokenIdOfRetirementCertificateNFT: BigNumberish,
      ticketType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
