defmodule RansomNote do
  @spec can_construct(ransom_note :: String.t(), magazine :: String.t()) :: boolean
  def can_construct(ransom_note, magazine) do
    mag_feq =
      magazine
      |> String.graphemes()
      |> Enum.frequencies()

    ran_feq =
      ransom_note
      |> String.graphemes()
      |> Enum.frequencies()

    feq = Map.merge(mag_feq, ran_feq)
      |> Map.keys()
      |> Enum.reduce(%{}, fn k, acc ->
        mag_count = Map.get(mag_feq, k, 0)
        ran_count = Map.get(ran_feq, k, 0)

        Map.put(acc, k , mag_count - ran_count)
      end)
      |> Enum.all?(fn {_k, val} -> val >= 0 end)


  end

  def can_construct_2(ransom_note, magazine) do
    mag = String.to_charlist(magazine)
    ransom = String.to_charlist(ransom_note)

    ransom -- mag == []

  end
end
