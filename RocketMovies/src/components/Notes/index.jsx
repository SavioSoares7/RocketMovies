import { Container } from "./style";

import { AiFillStar } from "react-icons/ai";

import { Tags } from "../../components/Tags";

function counterStar(star) {
  let i = 0;
  while (i < star) {
    let starEle = document.querySelectorAll(`footer svg:nth-child(${i})`);

    starEle.forEach((ele) => {
      ele.style.color = `#FF859B`;
    });

    i++;
  }
}

export function Notes({ data, ...rest }) {
  return (
    <Container>
      <h6>{data.title}</h6>

      <footer>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        {counterStar(data.star)}

        <p>{data.text}</p>

        <div>
          {data.tags.map((map) => {
            return <Tags title={map.title} key={map.key} />;
          })}
        </div>
      </footer>
    </Container>
  );
}
