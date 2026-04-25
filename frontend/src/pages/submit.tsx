import { SingleColumnContent } from "../components/content";

function Submit(){
  return (
    <SingleColumnContent name="Submit">
      <h1 className="text-center">
        <span className="text-(--primary-color)">Thank</span> <span className="text-(--secondary-color)">You</span></h1>
      <hr className="my-5"/>
      <h3 className="text-center">For <span className="text-(--secondary-color)">Contacting</span> <span className="text-(--primary-color)">Me</span></h3>
    </SingleColumnContent>
  )
}
export default Submit