/**
 * @typedef {import("@prismicio/client").Content.BentoSlice} BentoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BentoSlice>} BentoProps
 * @param {BentoProps}
 */
const Bento = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-[70px]"
    >
      HEROO
    </section>
  );
};

export default Bento;
