import Landing from "pages/LandingPages/LandingHTML";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignOut() {
  const navigate = useNavigate();
    useEffect(() => {
    localStorage.clear();
    navigate('/');
  }, [])
  return (
    <>
    <div>SignOut</div>
    </>
  )
}
