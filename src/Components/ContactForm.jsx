const cls = "border-2 border-green-500 rounded-xl p-2 mr-2 mb-2";

export const ContactForm = ({
  myName,
  myNumber,
  onChange,
  onChangeName,
  onChangeNumber,
  onSubmit,
  title,
  inputNameRef,
  inputNumberRef,
  header,
}) => {
  return (
    <div>
      <h1 className="pt-2 pb-2">{header}</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={onChangeName || onChange}
          value={myName}
          name="name"
          ref={inputNameRef}
          className={cls}
        />
        <input
          type="number"
          placeholder="Phone Number"
          onChange={onChangeNumber || onChange}
          value={myNumber}
          name="number"
          ref={inputNumberRef}
          className={cls}
        />
        <button
          type="submit"
          className="bg-red-500 p-2 rounded-xl text-white font-bold"
        >
          {title}
        </button>
      </form>
    </div>
  );
};
