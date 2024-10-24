import DragStar from "@/components/DragStar";

/**
 * @typedef {import("@prismicio/client").Content.DraggableGsapSlice} DraggableGsapSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DraggableGsapSlice>} DraggableGsapProps
 * @param {DraggableGsapProps}
 */
const DraggableGsap = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <DragStar />
    </section>
  );
};

export default DraggableGsap;
