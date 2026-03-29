import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "../components/AnimatedButton";

const Signup = () => {
  const [name, setName] = useState("");
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
          <span className="kid-title-accent">Join Merry Kids!</span>
        </h1>

        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="kid-input"
          />
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
            onClick={() => alert("Signed up!")}
            className="w-full text-base"
            variant="secondary"
          >
            Create Account
          </AnimatedButton>

          <p
            className="text-center"
            style={{ color: "var(--kid-muted)", marginTop: "4px" }}
          >
            Already have an account?{" "}
            <a href="/login" className="kid-link">
              Login
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
