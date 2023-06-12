import React from 'react';
import Image1 from './Image/About1.jpg';

const About = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">About Rejuvenate Health Care</h2>
      <p>
      Rejuvenate originated as a combination of the prefix re-, which means "again," with the Latin parent of juvenile and junior—juvenis, meaning "young." Rejuvenate literally means "to make young again" and can imply a restoration of physical or mental strength or a return to a more youthful, healthy condition. Things that are timeworn can also be rejuvenated.
      </p>
      <p>
        Aliquam erat volutpat. Proin vitae libero volutpat, maximus erat eget, bibendum lectus. Donec consequat
        finibus ipsum, nec maximus est pulvinar sed. Sed gravida laoreet tortor, non auctor justo. Proin placerat
        arcu metus, at feugiat metus dignissim sit amet. Quisque sagittis neque vitae pulvinar viverra.
        Praesent interdum tempus pharetra. Proin porttitor augue sit amet lorem ultrices cursus. Nullam
        sollicitudin orci eu erat bibendum interdum.
      </p>
      <p>
        Sed non efficitur sem. Fusce vestibulum metus in leo vulputate, vitae feugiat nulla luctus.
        Curabitur maximus malesuada metus id iaculis. Sed lobortis neque ut erat dapibus, nec tristique
        orci tristique. Vivamus fringilla turpis ut tortor mattis, sit amet aliquam nisi interdum.
        Maecenas commodo nisl nec pulvinar feugiat. Nam et tellus sit amet tellus pulvinar mattis.
        Nam vel sapien at odio interdum venenatis. Donec pretium placerat fringilla. Integer feugiat
        risus vitae lacus congue malesuada.
      </p>
      <img src={Image1} alt='about company' width="50%" height="50%" />

      
    </div>
  );
};

export default About;
