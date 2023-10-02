import React from 'react'
import { Table } from 'flowbite-react';

function ContactsData() {
    return (
        <>
            {/* Demandes envoyées par l'utilisateur */}
            <div className='ml-3'>
                <h1 className='text-xl my-2'>Demande(s) envoyée(s)</h1>
                <Table>
                    <Table.Head>
                        <Table.HeadCell>
                            Destinataire
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Statut
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Cayetano
                            </Table.Cell>
                            <Table.Cell>
                                En attente
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                <p>
                                    Thomas
                                </p>
                            </Table.Cell>
                            <Table.Cell>
                                Refusée
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Amine
                            </Table.Cell>
                            <Table.Cell>
                                Validée
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>

            {/* Demande reçues */}
            <div className='ml-3'>
                <h1 className='text-xl my-2'>Demande(s) reçue(s)</h1>
                <Table>
                    <Table.Head>
                        <Table.HeadCell>
                            Contact(s)
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">
                                Accepter
                            </span>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">
                                Refuser
                            </span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Fabien
                            </Table.Cell>
                            <Table.Cell>
                                <a
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                    href="/tables"
                                >
                                    <p>
                                        Accepter
                                    </p>
                                </a>
                            </Table.Cell>
                            <Table.Cell>
                                <a
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                    href="/tables"
                                >
                                    <p>
                                        Refuser
                                    </p>
                                </a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                <p>
                                    Franck
                                </p>
                            </Table.Cell>
                            <Table.Cell>
                                <a
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                    href="/tables"
                                >
                                    <p>
                                        Accepter
                                    </p>
                                </a>
                            </Table.Cell>
                            <Table.Cell>
                                <a
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                    href="/tables"
                                >
                                    <p>
                                        Refuser
                                    </p>
                                </a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Lucas
                            </Table.Cell>
                            <Table.Cell>
                                <a
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                    href="/tables"
                                >
                                    <p>
                                        Accepter
                                    </p>
                                </a>
                            </Table.Cell>
                            <Table.Cell>
                                <a
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                    href="/tables"
                                >
                                    <p>
                                        Refuser
                                    </p>
                                </a>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </>
    )
}

export default ContactsData