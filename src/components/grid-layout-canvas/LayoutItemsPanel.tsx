/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import SortableItem from "./SortableItem";
import { LayoutItemsPanelProps } from "./types";

const LayoutItemsPanel: React.FC<LayoutItemsPanelProps> = ({
  items,
  onItemsChange,
}) => {
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 10 } }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 250, tolerance: 5 },
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      onItemsChange(arrayMove(items, oldIndex, newIndex));
    }
  };

  // Function to get unique display name
  const getUniqueDisplayName = (item: any) => {
    // Find all items with the same name across all layouts
    const sameNameItems = items.filter((i: any) => i.name === item.name);

    if (sameNameItems.length > 1) {
      // If there are duplicates, find the index of this item
      const index = sameNameItems.findIndex((i: any) => i.id === item.id);
      // Include both layout and index in the name
      return `${item.name} (${index + 1})`;
    }

    // If no duplicates, just show layout and name
    return `${item.name}`;
  };

  return (
    <div className="bg-brand-contrast/5 backdrop-blur-sm border border-brand-contrast/20 rounded-xl p-6 h-fit">
      <h2 className="text-xl font-semibold mb-4 text-brand-contrast">Layout Items</h2>
      <p className="text-sm text-brand-contrast/70 mb-4">
        Drag to reorder items (affects HTML output order)
      </p>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToParentElement]}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <div className="space-y-2">
            {items.length > 0 ? (
              items.map((item) => (
                <SortableItem key={item.id} id={item.id}>
                  <div className="p-3 bg-brand-contrast/10 rounded-lg border border-brand-contrast/20 hover:bg-brand-contrast/15 transition-colors duration-200">
                    <span className="text-brand-contrast">{getUniqueDisplayName(item)}</span>
                  </div>
                </SortableItem>
              ))
            ) : (
              <p className="text-sm text-brand-contrast/50 italic">
                No layout items yet.
              </p>
            )}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default LayoutItemsPanel;
