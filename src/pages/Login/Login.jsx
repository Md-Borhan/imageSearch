/* import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  "https://pigbwhurtyxwqcufjkww.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpZ2J3aHVydHl4d3FjdWZqa3d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4NjA2NTcsImV4cCI6MjAwNjQzNjY1N30.EG0DdBXjp66GDg6stwnBMDr2mJR2oeRwPuXzFiHEH9Q"
);
const Login = () => {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event !== "SIGNED_OUT") {
      // navigate("/history");
    } else {
      navigate("/");
    }
  });

  return (
    <div className="pt-20 w-full md:w-7/12 lg:w-5/12 mx-auto">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={["discord", "github"]}
      />
    </div>
  );
};

export default Login;
 */

import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  "https://pigbwhurtyxwqcufjkww.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpZ2J3aHVydHl4d3FjdWZqa3d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4NjA2NTcsImV4cCI6MjAwNjQzNjY1N30.EG0DdBXjp66GDg6stwnBMDr2mJR2oeRwPuXzFiHEH9Q"
);

const Login = () => {
  const navigate = useNavigate();
  console.log(supabase.auth);
  supabase.auth.onAuthStateChange(async (event) => {
    console.log(event);
    if (event !== "SIGNED_IN") {
      // navigate("/history");
    } else {
      navigate("/");
    }
  });

  return (
    <div className="pt-20 w-full md:w-7/12 lg:w-5/12 mx-auto">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="white"
        providers={["discord", "github"]}
      />
    </div>
  );
};

export default Login;
