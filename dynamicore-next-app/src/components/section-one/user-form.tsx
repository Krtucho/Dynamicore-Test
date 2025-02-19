'use client';

// Userform.js
import React, { useState } from 'react';

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submittedData, setSubmittedData] = useState({ name: "", email: "" });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (name && email) {
            setSubmittedData({ name, email });
        }
    };

    return (
        <div className='flex flex-col w-full h-full justify-center items-center'>
            <form className='max-w-md mx-auto space-y-6 p-6 bg-white rounded-xl shadow-md' onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Nombre:
                            <input type="text" className="w-full px-3 py-2 border rounded-md bg-gray-50 text-gray-900
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                   transition-colors duration-200" value={name} onChange={(e) => setName(e.target.value)} />
                        </label>
                    </div>
                    <div className="space-y-2">

                        <label className="block text-sm font-medium text-gray-700">
                            Email:
                            <input type="email" className="w-full px-3 py-2 border rounded-md bg-gray-50 text-gray-900
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                   transition-colors duration-200" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                    </div>
                </div>
                <button className="px-6 py-2.5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
             text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-br 
             focus:outline-none focus:ring-4 focus:ring-blue-300 
             transition-all duration-200 ease-in-out" type="submit">Enviar</button>
            </form>
            {submittedData && (
                <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Datos Ingresados:</h3>
                    <p className="text-gray-700">Nombre: {submittedData.name}</p>
                    <p className="text-gray-700">Email: {submittedData.email}</p>
                </div>
            )}
        </div>
    )
}

export default UserForm;