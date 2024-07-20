import React from "react";

type Props = {
  active: boolean;
};

export default function DayCard(props: Props) {
  const { active = false } = props;
  if (active) {
    return (
      <div className="day__card-active">
        <div>Day Card</div>
      </div>
    );
  }
  return (
    <div className="day__card">
      <div>Day Card</div>
    </div>
  );
}
