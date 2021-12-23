def janken
  
  puts "[0]:グー\n[1]:チョキ\n[2]:パー"
  player_hand = gets.to_i
  
  cpu_hand = rand(3)
  
  jankens = ["グー", "チョキ", "パー"]
  
  puts "あなたの手:#{jankens[player_hand]}, コンピュータの手:#{jankens[cpu_hand]}"
  
  if player_hand == cpu_hand
    puts "あいこで"
    return true
  elsif (player_hand == 0 && cpu_hand == 1) || (player_hand == 1 && cpu_hand == 2) || (player_hand == 2 && cpu_hand == 0)
    puts "あなたの勝ちです"
    return false
  else
    puts "あなたの負けです"
    return false
  end
end

next_game = true

puts "最初はグー、じゃんけん..."

while next_game do
  next_game = janken
end