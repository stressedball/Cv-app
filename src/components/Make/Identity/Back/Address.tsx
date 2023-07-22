import React from 'react';
//
import {IdentityContext} from '../../../../assets/context/IdentityContext';
import {IdentityContextType} from '../../../../assets/context/IdentityContext';

export default function Address() {
    const {identity, handleIdentity} = React.useContext(IdentityContext) as IdentityContextType;
    return (
        <>
            <div className='flex align justifyEnd block'>
                <p className='label'>Address</p>
                <div className='flex column block grow'>
                    <div className='flex wrap align block'>
                        <input // address number
                            value={identity.address.number}
                            onChange={(e) => {
                                handleIdentity({
                                    ...identity,
                                    address: {
                                        number: String(e.target.value),
                                    },
                                });
                            }}
                            onBlur={(e) => e.target.classList.add('compact')}
                            onClick={(e: any) => e.target.classList.remove('compact')}
                            className={`${identity.address.number !== '' ? 'compact' : ''}`}
                            type='number'
                            name='addressNumber'
                            id='addressNumber'
                        />
                        <input // address street
                            onChange={(e) => {
                                handleIdentity({
                                    ...identity,
                                    address: {
                                        street: e.target.value,
                                    },
                                });
                            }}
                            onBlur={(e) => e.target.classList.add('compact')}
                            onClick={(e: any) => e.target.classList.remove('compact')}
                            className={`${identity.address.street !== '' ? 'compact' : ''}`}
                            type='text'
                            name='street'
                            id='street'
                            value={identity.address.street}
                        />
                        <input // address town
                            value={identity.address.town}
                            onChange={(e) => {
                                handleIdentity({
                                    ...identity,
                                    address: {
                                        town: e.target.value,
                                    },
                                });
                            }}
                            onBlur={(e) => e.target.classList.add('compact')}
                            onClick={(e: any) => e.target.classList.remove('compact')}
                            className={`${identity.address.town !== '' ? 'compact' : ''}`}
                            id='town'
                            type='text'
                            name='town'
                        />
                        <input // address zipCode
                            value={identity.address.zipCode}
                            onChange={(e) => {
                                handleIdentity({
                                    ...identity,
                                    address: {
                                        zipCode: e.target.value,
                                    },
                                });
                            }}
                            onBlur={(e) => e.target.classList.add('compact')}
                            onClick={(e: any) => e.target.classList.remove('compact')}
                            className={`${identity.address.zipCode !== '' ? 'compact' : ''}`}
                            type='number'
                            name='zipCode'
                            id='zipCode'
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
