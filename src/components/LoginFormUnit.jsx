import { Button } from '@/components/ui/button';
import { Globe, UserRound } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import authService from '../appwrite/auth';
import InputwRef from '../components/InputwRef';
import { logout, login as storeAuthLogin } from '../store/authSlice';
import BackgroundVector from './BackgroundVector';
import LinkUnit from './LinkUnit';

const LoginFormUnit = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');
const logoutHandler=()=>{
  authService
      .logout()
      .then(() => {
        dispatch(logout());
        // navigate("/signup")
        navigate("/login")
      })
      .catch((e) => {
        console.log("Error found - logoutBtncomponentHeader", e);
      });
}
    const login = async (data) => {
        setError(''); // Clear error when logging in
        try {
            const session = await authService.login(data);

            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(storeAuthLogin(userData));
                    console.log('dispatching userData');
                }
                navigate('/');
            }
        } catch (errorFound) {
            setError(errorFound || 'An error occurred during login');
            console.error('Login error:', errorFound);
        }
    };
    return (
        <>
            <BackgroundVector />
            <section className="py-12">
                <div className="container">
                    <div className="flex flex-col gap-2">
                        {/* <img
              src="https://www.shadcnblocks.com/images/block/logos/shadcn-ui.svg"
              alt="logo"
              className="h-8"
            /> */}
                        <Card className="mx-auto w-full max-w-md bg-card text-card-foreground">
                            <CardHeader className="items-center">
                                <UserRound className="size-10 rounded-full bg-accent p-2.5 text-muted-foreground" />
                                <CardTitle className="text-xl">Log into your account</CardTitle>
                                <CardDescription>Enter your information to login</CardDescription>
                            </CardHeader>
                            <CardContent>
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
                                <form onSubmit={handleSubmit(login)}>
                                    <div className=" pt-12 grid gap-3">
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
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <Label htmlFor="password">Password</Label>
                                                {/* <a href="#" className="text-sm underline">
                                                        Forgot password
                                                    </a> */}
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
                            </CardContent>
                        </Card>
                        <div className="mx-auto flex gap-1 text-sm">
                            <p>Don&apos;t have an account yet?</p>

                            <LinkUnit text="Register" to="/signup" />
                        </div>
                    </div>
                </div>
            </section>

            {/* INSPIRATIoN */}
            {/* <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-4">
          <img
            src="https://www.shadcnblocks.com/images/block/logos/shadcn-ui.svg"
            alt="logo"
            className="h-8"
          />
          <Card className="mx-auto w-full max-w-md">
            <CardHeader className="items-center">
              <UserRound className="size-10 rounded-full bg-accent p-2.5 text-muted-foreground" />
              <CardTitle className="text-xl">Sign Up</CardTitle>
              <CardDescription>
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Button variant="outline" className="w-full">
                  <Globe className="mr-2 size-4" />
                  Sign up with Google
                </Button>
                <div className="flex items-center gap-4">
                  <span className="h-px w-full bg-input"></span>
                  <span className="text-xs text-muted-foreground">OR</span>
                  <span className="h-px w-full bg-input"></span>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Create an account
                </Button>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                By continuing, you&apos;re agreeing to our
                <a href="#" className="ml-1 underline hover:text-primary">
                  Terms and Privacy Policy.
                </a>
              </div>
            </CardContent>
          </Card>
          <div className="mx-auto flex gap-1 text-sm">
            <p>Already have an account?</p>
            <a href="#" className="underline">
              Log in
            </a>
          </div>
        </div>
      </div>
    </section> */}
            <section>
                {error && <p className="text-red-500">{error}</p>}
                {/* <form onSubmit={handleSubmit(login)}>
            <InputwRef
              label="email"
              name="Email"
              placeholder="enter your email"
              type="email"
              ref={register}
              {...register("email", {
                required: true,
                validate: {
                  pattern: (value) =>
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      value
                    ) || "email must be a valid address",
                },
              })}
            />
            <InputwRef
              label="password"
              name="password"
              placeholder="enter your password"
              type="password"
              ref={register}
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit">Login</Button>
          </form> */}
            </section>

            <div className="flex gap-1 justify-center text-xs text-secondary-foreground/40 ">
              Trouble logging in? Delete your previously logged session by clicking 

              <span className=' underline  text-secondary-foreground/60 font-medium hover:bg-accent  rounded transition-all duration-500 ease-in-out' onClick={logoutHandler}>here</span>
                        </div>
            <p className='flex ' >
              </p>
              
        </>
    );
};

export default LoginFormUnit;
