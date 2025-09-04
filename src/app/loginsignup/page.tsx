"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Footer from "@/components/Footer";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

// ✅ Validation schema
const validationSchema = Yup.object({
  fname: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function LoginSignup() {
  const router=useRouter();
    const goToGuest=(e:React.MouseEvent<HTMLButtonElement>)=>{
      e.preventDefault();
      router.push('/Home');
    }
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex flex-col justify-center items-center gap-10 p-6">
        <Formik
          initialValues={{ fname: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col bg-white shadow-lg rounded-2xl p-8 w-80 space-y-4">
              <h2 className="text-xl font-bold text-blue-500 text-center">Get Started</h2>

              {/* Name */}
              <Field
                type="text"
                name="fname"
                placeholder="Enter your name"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="fname" component="span" className="text-red-500 text-sm" />

              {/* Email */}
              <Field
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="email" component="span" className="text-red-500 text-sm" />

              {/* Password */}
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="password" component="span" className="text-red-500 text-sm" />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer disabled:bg-gray-400"
              >
                {isSubmitting ? "Submitting..." : "Sign Up"}
              </button>

              <span className="text-center">or</span>

              {/* Guest Button */}
              <button type="button" className="px-6 py-4 text-blue-400 cursor-pointer" onClick={goToGuest}>
                Continue as Guest
              </button>
            </Form>
          )}
        </Formik>
      </main>

      {/* ✅ Full-width Footer */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
