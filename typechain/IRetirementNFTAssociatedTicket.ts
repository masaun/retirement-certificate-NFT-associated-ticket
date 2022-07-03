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

export interface IRetirementNFTAssociatedTicketInterface
  extends utils.Interface {
  contractName: "IRetirementNFTAssociatedTicket";
  functions: {
    "saveRetirementNFTAssociatedTicketMetadata(address,uint256[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "saveRetirementNFTAssociatedTicketMetadata",
    values: [string, BigNumberish[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "saveRetirementNFTAssociatedTicketMetadata",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IRetirementNFTAssociatedTicket extends BaseContract {
  contractName: "IRetirementNFTAssociatedTicket";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRetirementNFTAssociatedTicketInterface;

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
    saveRetirementNFTAssociatedTicketMetadata(
      retirementNFT: string,
      randomNumbers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  saveRetirementNFTAssociatedTicketMetadata(
    retirementNFT: string,
    randomNumbers: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    saveRetirementNFTAssociatedTicketMetadata(
      retirementNFT: string,
      randomNumbers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    saveRetirementNFTAssociatedTicketMetadata(
      retirementNFT: string,
      randomNumbers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    saveRetirementNFTAssociatedTicketMetadata(
      retirementNFT: string,
      randomNumbers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
