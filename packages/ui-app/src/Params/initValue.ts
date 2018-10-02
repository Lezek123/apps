// Copyright 2017-2018 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { TypeDef } from '@polkadot/types/codec';
import { RawParam$Value } from './types';

import BN from 'bn.js';

export default function getInitValue (type: TypeDef): RawParam$Value | Array<RawParam$Value> {
  switch (type.type) {
    case 'Balance':
      return new BN(1);

    case 'BlockNumber':
    case 'AccountIndex':
    case 'Index':
    case 'ParachainId':
    case 'PropIndex':
    case 'ReferendumIndex':
    case 'SessionKey':
    case 'u32':
    case 'u64':
    case 'u128':
    case 'VoteIndex':
      return new BN(0);

    case 'bool':
      return false;

    case 'String':
      return '';

    case 'Timestamp':
      return new Date(0);

    case 'VoteThreshold':
      return 0;

    case 'AccountId':
    case 'Bytes':
    case 'Call':
    case 'CandidateReceipt':
    case 'Code':
    case 'Digest':
    case 'Hash':
    case 'Header':
    case 'KeyValue':
    case 'StorageKeyValue':
    case 'MisbehaviorReport':
    case 'Proposal':
    case 'Signature':
      return void 0;

    default:
      // tslint:disable-next-line
      (type as never);
      throw new Error(`Unable to determine default type for ${JSON.stringify(type)}`);
  }
}
