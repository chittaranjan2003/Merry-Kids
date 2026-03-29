import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedButton from "../components/AnimatedButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="kid-page kid-page--nav flex items-center justify-center px-6 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true, amount: 0.6 }}
        className="kid-form-shell"
      >
        <h1 className="text-3xl font-extrabold text-center mb-8">
          <span className="kid-title-accent">Welcome Back!</span>
        </h1>
        <div className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="kid-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="kid-input"
          />
          <AnimatedButton
            onClick={() => alert("Logged in!")}
            className="w-full text-base"
          >
            Login
          </AnimatedButton>

          <p
            className="text-center"
            style={{ color: "var(--kid-muted)", marginTop: "4px" }}
          >
            Don't have an account?{" "}
            <Link to="/signup" className="kid-link">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
