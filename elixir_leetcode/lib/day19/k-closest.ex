defmodule KClostest do
  @spec k_closest(points :: [[integer]], k :: integer) :: [[integer]]
  def k_closest(points, k) do
    points
    |> Enum.sort(fn ([xa, ya], [xb, yb])->
      (xa ** 2 + ya ** 2) < (xb ** 2 + yb ** 2)
     end)
    |> Enum.slice(0..k - 1)
  end
end
