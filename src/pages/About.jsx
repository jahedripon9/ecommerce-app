import { assets } from "../assets/frontend_assets/assets"
import { NewsLetterBox } from "../components/NewsLetterBox"
import Title from "../components/Title"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"  US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, quaerat explicabo sunt distinctio inventore alias!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, iusto.lorem20</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quae doloribus sequi. Vitae porro inventore numquam dolorem fuga, temporibus a libero, laudantium fugit consequuntur, aspernatur cupiditate voluptates doloribus perspiciatis nobis?</p>
        </div>
      </div>
      <div className="text-xl py-4 uppercase">
        <Title text1={"Why "} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nisi ipsa eligendi delectus, consequuntur iure! Doloribus officia deleniti quisquam fugit?</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nisi ipsa eligendi delectus, consequuntur iure! Doloribus officia deleniti quisquam fugit?</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nisi ipsa eligendi delectus, consequuntur iure! Doloribus officia deleniti quisquam fugit?</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About