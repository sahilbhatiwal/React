import React from "react";

// function Card(props){
function Card({name, Place = "INDIA"}){
    return(
        <>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full" src="https://images.pexels.com/photos/30763985/pexels-photo-30763985/free-photo-of-stylish-black-and-white-fashion-portrait.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption>
        <div>
          {/* {props.name} */}
          {name}
        </div>
        <div>
          {/* Staff Engineer, Algolia */}
          {/* {props.Place} */}
          {Place}
        </div>
      </figcaption>
    </div>
    </figure>
        </>
    )
}

export default Card