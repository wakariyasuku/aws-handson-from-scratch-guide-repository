import streamlit as st

# タイトル
st.title("Hello App")

# 名前の入力
name = st.text_input("お名前を入力してください")

# ボタンがクリックされたら、結果を表示
if st.button("送信"):
    if name:
        st.write(f"Hello {name} さん")
        st.write(f"ここまでのハンズオンお疲れさまでした！")
    else:
        st.write("名前を入力してください")
