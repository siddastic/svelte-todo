<script lang="ts"></script>

<div class="modal">
    <div class="header">Create New List</div>
    <div class="modal-content">
        <input type="text" placeholder="Enter New List Title" />
    </div>

    <div class="modal-buttons">
        <button> Close </button>
        &nbsp; &nbsp;
        <button class="primary-button"> Save </button>
    </div>
</div>

<style>
    .modal {
        background-color: #17181f;
        color: white;
    }
    .header {
        background-color: #21212b;
        padding: 12px 16px;
        color: #b6b6b9;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
    }
    .modal-content {
        padding: 16px 8px;
    }
    .modal-buttons {
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        padding-right: 20px;
        padding-bottom: 10px;
    }
    input{
        border: none;
        outline: none;
        background-color: transparent;
        color: white;
        margin-bottom: 0px;
        width: 100%;
    }
    button {
        background-color: transparent;
        color: white;
        border: none;
        outline: none;
    }
    .primary-button {
        background-color: #fc76a1;
    }
</style>
