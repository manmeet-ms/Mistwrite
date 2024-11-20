import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, UserRound } from 'lucide-react';

import authService from '../appwrite/auth';
import { login as storeAuthLogin } from '../store/authSlice';
import InputwRef from '../components/InputwRef';
import Header from '../components/Header/Header';
import { ThemeProvider } from '@/components/theme-provider';
import BackgroundVector from '../components/BackgroundVector';
import LinkUnit from '../components/LinkUnit';
import globalStyle from '../conf/globalStyle';

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const { register, handleSubmit } = useForm();
    const create = async (data) => {
        setError('');
        try {
            const newUser = await authService.createAccount(data);
            console.log('Data received:: userData::', data);
            console.log('Account created:: userData::', newUser);

            if (newUser) {
                const currentUserData = await authService.getCurrentUser(newUser);
                if (currentUserData) dispatch(storeAuthLogin(currentUserData));
                console.log('User Found:: userData::', currentUserData);
                navigate('/');
            }
        } catch (err) {
            console.error('Signup error:', err);
            setError(err.message || 'An error occurred while creating your account.');
        }
    };

    return (
        //NOT USING COMPONENT APPROACCH RIGHT NOW
        <>
            <ThemeProvider>
                <BackgroundVector />

                <Header />
                <section className={`${globalStyle.pageBodyPaddingX} py-12`}>
                    <div className="container">
                        <div className="flex flex-col gap-4">
                            {/* <img
              src="https://www.shadcnblocks.com/images/block/logos/shadcn-ui.svg"
              alt="logo"
              className="h-8"
            /> */}
                            <Card className="mx-auto w-full max-w-md">
                                <CardHeader className="items-center">
                                    <UserRound className="size-10 rounded-full bg-accent p-2.5 text-muted-foreground" />
                                    <CardTitle className="text-xl">Create new account</CardTitle>
                                    <CardDescription>Please provide information below</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit(create)}>
                                        <div className="grid gap-3 pt-6">
                                            {/* <Button variant="secondary" className="w-full">
                    <Google sx={{fontSize:18
                    }} className="mr-2 size-4" />
                    Continue with Google
                  </Button> */}
                                            {/* <div className="flex items-center gap-4">
                    <span className="h-px w-full bg-input"></span>
                    <span className="text-xs text-muted-foreground">OR</span>
                    <span className="h-px w-full bg-input"></span>
                  </div> */}

                                            <InputwRef
                                                label="Name"
                                                ref={register}
                                                name="name"
                                                placeholder="Your Name"
                                                type="text"
                                                {...register('name', {
                                                    required: true,
                                                })}
                                            />
                                            <InputwRef
                                                label="Email"
                                                ref={register}
                                                name="Email"
                                                placeholder="email@example.com"
                                                autoComplete="email"
                                                type="email"
                                                {...register('email', {
                                                    required: true,
                                                })}
                                            />
                                            <InputwRef
                                                label="Password"
                                                ref={register}
                                                name="password"
                                                placeholder="Password"
                                                autoComplete="password"
                                                type="password"
                                                {...register('password', {
                                                    required: true,
                                                })}
                                            />
                                            <Button className="w-full" type="submit">
                                                Create Account
                                            </Button>
                                        </div>
                                    </form>

                                    {/* <form onSubmit={handleSubmit(login)}>
                                    <div className=" pt-12 grid gap-4">
                                        <InputwRef
                                            className="mt-1"
                                            label="Email"
                                            autoComplete="email"
                                            name="Email"
                                            placeholder="email@example.com"
                                            type="email"
                                            ref={register}
                                            {...register('email', {
                                                required: true,
                                                validate: {
                                                    pattern: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || 'Email must be a valid address',
                                                },
                                            })}
                                        />
                                        <div className="">
                                            <div className="flex justify-between mb-2">
                                                <Label htmlFor="password">Password</Label>
                                                {/* <a href="#" className="text-sm underline">
                                                        Forgot password
                                                    </a> 
                                            </div>
                                            <InputwRef
                                                autoComplete="password"
                                                className="mt-1"
                                                name="password"
                                                placeholder="Enter your password"
                                                type="password"
                                                ref={register}
                                                {...register('password', {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                        <Button className="w-full" type="submit">
                                            Login
                                        </Button>
                                    </div>
                                </form> 
                                */}
                                </CardContent>
                            </Card>
                            <div className="mx-auto flex gap-1 text-sm">
                                <p>Already have an account?</p>

                                <LinkUnit className="relative right-0.5" text="Log in" to="/login" />
                            </div>
                        </div>
                    </div>
                    {error && <p className="text-red-500">{error} </p>}
                </section>

            </ThemeProvider>
        </>
    );
};

export default Signup;

// import React from 'react'

// import Signup from '../components/Signup'
// const Signup = () => {
//   return (
// <div className="px-4">
// <Signup/>
// </div>
//   )
// }

// export default Signup
