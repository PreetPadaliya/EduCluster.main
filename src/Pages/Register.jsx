import React from 'react'

function Register() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-400">
            <div className="p-8 max-w-md w-full bg-white rounded shadow">
                <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center mt-4 text-gray-600">
                    Already have an account?
                    <a href="/login" className="text-blue-500 ml-1">Login here</a>
                </p>
            </div>
        </div>
    )
}

export default Register
