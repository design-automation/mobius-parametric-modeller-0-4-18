# MODIFY    

## Move  
* **Description:** Moves entities. The directio and distance if movement is specified as a vector.
~
If only one vector is given, then all entities are moved by the same vector.
If a list of vectors is given, the each entity will be moved by a different vector.
In this case, the number of vectors should be equal to the number of entities.
~
If a position is shared between entites that are being moved by different vectors,
then the position will be moved by the average of the vectors.  
* **Parameters:**  
  * *entities:* An entity or list of entities.  
  * *vectors:* undefined  
* **Returns:** void  
* **Examples:**  
  * modify.Move(pline1, [1,2,3])  
    Moves pline1 by [1,2,3].  
  * modify.Move([pos1, pos2, pos3], [[0,0,1], [0,0,1], [0,1,0]] )  
    Moves pos1 by [0,0,1], pos2 by [0,0,1], and pos3 by [0,1,0].  
  * modify.Move([pgon1, pgon2], [1,2,3] )  
    Moves both pgon1 and pgon2 by [1,2,3].
  
  
## Rotate  
* **Description:** Rotates entities on plane by angle.  
* **Parameters:**  
  * *entities:* Vertex, edge, wire, face, plane, position, point, polyline, polygon, collection.  
  * *origin:* A list of three numbers (or a position, point, or vertex).  
  * *axis:* A list of three numbers.  
  * *angle:* Angle (in radians).  
* **Returns:** void  
* **Examples:**  
  * modify.Rotate(polyline1, plane1, PI)  
    Rotates polyline1 on plane1 by PI (i.e. 180 degrees).
  
  
## Scale  
* **Description:** Scales entities on plane by factor.  
* **Parameters:**  
  * *entities:* Vertex, edge, wire, face, plane, position, point, polyline, polygon, collection.  
  * *origin:* Position, point, vertex, list of three numbers, plane.  
  * *scale:* Scale factor.  
* **Returns:** void  
* **Examples:**  
  * modify.Scale(entities, plane1, 0.5)  
    Scales entities by 0.5 on plane1.
  
  
## Mirror  
* **Description:** Mirrors entities across plane.  
* **Parameters:**  
  * *entities:* Vertex, edge, wire, face, plane, position, point, polyline, polygon, collection.  
  * *origin:* Position, vertex, point, list of three numbers.  
  * *direction:* Vector or a list of three numbers.  
* **Returns:** void  
* **Examples:**  
  * modify.Mirror(polygon1, plane1)  
    Mirrors polygon1 across plane1.
  
  
## XForm  
* **Description:** Transforms entities from one construction plane to another.  
* **Parameters:**  
  * *entities:* Vertex, edge, wire, face, position, point, polyline, polygon, collection.  
  * *from:* Plane defining target construction plane.  
  * *to:* Plane defining destination construction plane.  
* **Returns:** void  
* **Examples:**  
  * modify.XForm(polygon1, plane1, plane2)  
    Transforms polygon1 from plane1 to plane2.
  
  
## Reverse  
* **Description:** Reverses direction of entities.  
* **Parameters:**  
  * *entities:* Wire, face, polyline, polygon.  
* **Returns:** void  
* **Examples:**  
  * modify.Reverse(face1)  
    Flips face1 and reverses its normal.  
  * modify.Reverse(polyline1)  
    Reverses the order of vertices to reverse the direction of the polyline.
  
  
## Shift  
* **Description:** Shifts the order of the edges in a closed wire.
~
In a closed wire, any edge (or vertex) could be the first edge of the ring.
In some cases, it is useful to have an edge in a particular position in a ring.
This function allows the edges to be shifted either forwards or backwards around the ring.
The order of the edges in the ring will remain unchanged.  
* **Parameters:**  
  * *entities:* Wire, face, polyline, polygon.  
  * *offset:* undefined  
* **Returns:** void  
* **Examples:**  
  * modify.Shift(face1, 1)  
    Shifts the edges in the face wire, so that the every edge moves up by one position
in the ring. The last edge will become the first edge .  
  * modify.Shift(polyline1, -1)  
    Shifts the edges in the closed polyline wire, so that every edge moves back by one position
in the ring. The first edge will become the last edge.
  
  
## Close  
* **Description:** Closes polyline(s) if open.  
* **Parameters:**  
  * *lines:* Polyline(s).  
* **Returns:** void  
* **Examples:**  
  * modify.Close([polyline1,polyline2,...])  
    If open, polylines are changed to closed; if already closed, nothing happens.
  
  
## PushAttribs  
* **Description:** Pushes existing attribute values onto other entities.
Attribute values can be promoted up the hierarchy, demoted down the hierarchy, or transferred across the hierarchy.
~
In certain cases, when attributes are pushed, they may be aggregated. For example, if you are pushing attributes
from vertices to polygons, then there will be multiple vertex attributes that can be combined in
different ways.
The 'method' specifies how the attributes should be aggregated. Note that if no aggregation is required
then the aggregation method is ignored.
~
The aggregation methods consist of numerical functions such as average, median, sum, max, and min. These will
only work if the attribute values are numbers or lists of numbers. If the attribute values are string, then
the numerical functions are ignored.
~
If the attribute values are lists of numbers, then these aggregation methods work on the individual items in the list.
For example, lets say you have an attribute consisting of normal vectors on vertices. If you push these attributes
down to the positions, then aggregation may be required, since multiple vertices can share the same position.
In this case, if you choose the `average` aggregation method, then resulting vectors on the positions will be the
average of vertex vectors.  
* **Parameters:**  
  * *entities:* The entities that currently contain the attribute values.  
  * *attrib_name:* The name of the attribute to be promoted, demoted, or transferred.  
  * *to_level:* Enum; The level to which to promote, demote, or transfer the attribute values.  
  * *method:* Enum; The method to use when attribute values need to be aggregated.  
* **Returns:** void  
* **Examples:**  
  * promote1 = modify.PushAttribs([pgon1, pgon2], 'area', collections, sum)  
    For the two polygons (pgon1 and pgon2), it gets the attribute values from the attribute called `area`,
and pushes them up to the collection level. The `sum` method specifies that the two areas should be added up.
Note that in order to create an attribute at the collection level, the two polygons should be part of a
collection. If they are not part of the collection, then no attribute values will be push.
  
  
## Delete  
* **Description:** Deletes geometric entities: positions, points, polylines, polygons, and collections.
When deleting positions, any topology that requires those positions will also be deleted.
(For example, any vertices linked to the deleted position will also be deleted,
which may in turn result in some edges being deleted, and so forth.)
For positions, the selection to delete or keep unused positions is ignored.
When deleting objects (point, polyline, and polygons), topology is also deleted.
When deleting collections, none of the objects in the collection are deleted.  
* **Parameters:**  
  * *entities:* Position, point, polyline, polygon, collection.  
  * *del_unused_posis:* Enum, delete or keep unused positions.  
* **Returns:** void  
* **Examples:**  
  * modify.Delete(polygon1)  
    Deletes polygon1 from the model.
  
  
## Keep  
* **Description:** Keeps the specified geometric entities: positions, points, polylines, polygons, and collections.
Everything else in the model is deleted.
When a collection is kept, all objects inside the collection are also kept.
When an object is kept, all positions used by the object are also kept.  
* **Parameters:**  
  * *entities:* Position, point, polyline, polygon, collection.  
* **Returns:** void  
* **Examples:**  
  * modify.Delete(polygon1)  
    Deletes polygon1 from the model.
  
  
